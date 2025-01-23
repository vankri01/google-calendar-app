const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { google } = require('googleapis');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const app = express();

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Initialize passport
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
}, (token, tokenSecret, profile, done) => {
  return done(null, { profile, token });
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use(session({ secret: 'your-session-secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Home route
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`<h1>Welcome ${req.user.profile.displayName}</h1>
              <a href='/calendar'>View Calendar Events</a>`);
  } else {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
});

// Google authentication routes
app.get('/auth/google', (req, res, next) => {
  console.log('Google OAuth route hit');
  next();
}, passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/calendar.events.readonly']
  

}));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  console.log('Authentication successful');
  res.redirect('/calendar');
});

// Calendar route
app.get('/calendar', async (req, res) => {
  if (!req.isAuthenticated()) return res.redirect('/');

  const calendar = google.calendar({ version: 'v3', auth: req.user.token });
  try {
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items;
    res.send(`  
      <h1>Google Calendar Events</h1>
      <table>
        <tr><th>Event</th><th>Start Time</th><th>End Time</th></tr>
        ${events.map(event => `
          <tr>
            <td>${event.summary}</td>
            <td>${event.start.dateTime || event.start.date}</td>
            <td>${event.end.dateTime || event.end.date}</td>
          </tr>
        `).join('')}
      </table>
      <a href="/">Logout</a>
    `);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.send('Error fetching events.');
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

