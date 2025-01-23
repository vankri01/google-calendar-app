# WhiteCarrot Calendar

## Description
WhiteCarrot Calendar is a web application that allows users to view and manage their Google Calendar events. Built with a simple user interface and integrated with Google OAuth 2.0, users can sign in with their Google account to access their calendar events. The app fetches upcoming events and displays them in a user-friendly manner.

This project demonstrates a practical use of Google APIs and OAuth authentication, combining front-end and back-end technologies to create a seamless experience.

## Tech Stack

- **Frontend**: HTML, CSS (for styling), JavaScript
- **Backend**: Node.js, Express.js
- **Authentication**: Passport.js (Google OAuth 2.0)
- **APIs**: Google Calendar API
- **Database**: None (using Google’s API directly)
- **Development Tools**: VSCode, Node.js, NPM

## Design Choices

### Frontend
- **Responsive Design**: The UI has been designed to be clean and minimalist. The page adjusts to different screen sizes, ensuring it is usable on both mobile and desktop devices.
- **Font Choices**: The app uses a **Google Font** for a more appealing and modern look.
- **Calendar Layout**: Rather than a complex UI, the focus is on showing the most important event details (name, start time, and end time) in a clean and readable format.

### Backend
- **OAuth Authentication**: OAuth 2.0 is used for user authentication through Google. This method ensures secure login without handling sensitive user credentials directly.
- **API Usage**: The app fetches Google Calendar events using Google’s Calendar API, ensuring real-time data retrieval.
  
### Justification:
- **Simplicity**: The design choices aim for simplicity and usability. There are no complex interactions, making it easy for users to understand and use.
- **Security**: OAuth 2.0 ensures secure user authentication without storing credentials on the server.
  
## Features

- **Google OAuth 2.0 Authentication**: Users can securely sign in using their Google account.
- **Fetch Google Calendar Events**: After successful authentication, users can view their upcoming calendar events.
- **User Interface**: Simple and minimalistic design showing the most relevant information.
- **Event Display**: The application fetches events from the user’s Google Calendar, displaying them in a table format with event details like name, start time, and end time.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/whitecarrot-calendar.git
2. **Navigate to the project folder**:
   cd whitecarrot-calendar
3. **Install dependencies: Ensure you have Node.js and npm installed. If not, download and install Node.js**.
   **Run the following command to install project dependencies**:
   npm install
4. **Create a .env file: Create a .env file in the root directory and add your Google OAuth credentials:**
   GOOGLE_CLIENT_ID=your-client-id
   GOOGLE_CLIENT_SECRET=your-client-secret
   GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/callback
5. **Run the application:**
   node server.js
   The app will be running on http://localhost:3000.
6. **Access the app: Open your browser and go to http://localhost:3000. You can now authenticate with Google and view your calendar** **events.**
## PROJECT STRUCTURE
/whitecarrot-calendar
  ├── .env                  # Environment variables (Google OAuth credentials)
  ├── node_modules/          # Node.js modules
  ├── public/
  │   ├── index.html         # Frontend HTML page
  │   ├── style.css          # Styles for the application
  │   └── script.js          # JavaScript for frontend logic
  ├── server.js              # Backend logic using Node.js and Express
  ├── package.json           # Project dependencies and scripts
  └── README.md              # This README file

## LICENSE
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
I. Google Calendar API: Used for retrieving calendar events.
II. Passport.js: Used for implementing Google OAuth 2.0 authentication.
III. Node.js: Backend framework for handling server-side logic.
IV. Express.js: Minimalist web framework for building web applications with Node.js.


