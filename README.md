# Time Tracking App

A modern React Native application for time tracking and activity logging with a clean, intuitive interface.

## Features

- Real-time clock display
- Stopwatch functionality with start, pause, and reset
- Activity logging system
- Clean and responsive UI
- Tab-based navigation
- Settings configuration (planned features)

## Technologies Used

- React Native
- @react-navigation/native
- @react-navigation/bottom-tabs
- lucide-react-native
- React Context API for state management

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd app-practice-react
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Run on your device or emulator:
```bash
# For iOS
npm run ios

# For Android
npm run android
```

## Project Structure

```
app-practice-react/
├── App.js                 # Main application component
├── app.json              # Application configuration
├── index.js             # Entry point
├── package.json         # Project dependencies
└── assets/             # Static assets
    ├── adaptive-icon.png
    ├── favicon.png
    ├── icon.png
    └── splash-icon.png
```

## Main Features Breakdown

### Clock Screen
- Displays current time
- Includes stopwatch functionality
- Activity logging on session completion

### Activity Log
- Lists all recorded time sessions
- Shows duration and timestamp for each activity
- Scrollable history view

### Settings
- Time zone selection (planned)
- Notification preferences (planned)
- Dark mode toggle (planned)

### About
- Application information
- Version details
- Copyright information

## Version History

- 0.2.0 - Current version
  - Added activity logging
  - Implemented stopwatch functionality
  - Added basic settings interface

## Development

The application is built with React Native and uses modern React features including:
- Functional components
- React Hooks (useState, useEffect, useRef, useContext)
- Context API for state management
- React Navigation for tab-based navigation

## Acknowledgments

- React Native team
- React Navigation team
- Lucide React Native for icons
- Professor Alejandro for his help with this project.
