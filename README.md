# PWA Foodbank Application

## Overview
The PWA Foodbank Application is a Progressive Web App built with Vite. It streamlines the process of managing and distributing food items through a food bank. The application provides a user-friendly interface for users to request food, check availability, and receive updates on their requests. It also includes an admin interface for managing inventory and handling requests.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Registration and Authentication**: Users can sign up, log in, and manage their profiles.
- **Request Food**: Users can browse available food items and submit requests.
- **Check Availability**: Users can check the availability of food items in real-time.
- **Request Status**: Users can view the status of their food requests.
- **Admin Interface**: Admins can manage food inventory, view and process requests, and handle user management.
- **Offline Access**: Users can access the app offline and submit requests, which will be synchronized when online.
- **Push Notifications**: Users receive notifications about their request status and other important updates.

## Demo
You can access a live demo of the application [here](https://example.com/demo).

## Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- MongoDB for storing user data, food inventory, and requests
- Firebase for push notifications and authentication (optional but recommended)
- AWS account (for hosting the backend, optional if using Firebase)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/pwa-foodbank.git
cd pwa-foodbank
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Setup MongoDB
Ensure you have a MongoDB instance running locally or on a remote server. Create a database for the food bank application.

### 4. Configure Environment Variables
Create a `.env` file in the root directory and add your configuration:
```
VITE_MONGO_URI=your-mongodb-connection-string
VITE_JWT_SECRET=your-jwt-secret
VITE_FIREBASE_CONFIG=your-firebase-config
VITE_PORT=your-port (default: 3000)
```

## Configuration

### Firebase Setup (Optional)
If using Firebase for authentication and push notifications:
1. Sign up for a Firebase account and create a new project.
2. Enable Authentication (Email/Password).
3. Enable Cloud Messaging for push notifications.
4. Add your Firebase configuration to the `.env` file.

### PWA Setup
Ensure the service worker and manifest files are correctly configured to enable offline capabilities and push notifications:
- `public/manifest.json`
- `src/service-worker.js`

## Usage

### Starting the Application
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:3000`.

### Building for Production
```bash
npm run build
# or
yarn build
```
The production files will be in the `dist` folder. You can serve them using any static file server or deploy them to your preferred hosting service.

### User Interface
- **Home Page**: Displays available food items and categories.
- **Request Food**: Users can browse items and add them to their request list.
- **User Dashboard**: Users can view their request history and status.
- **Admin Dashboard**: Admins can manage inventory and process requests.

### Example Workflow
1. **User Registration**: User signs up and logs in.
2. **Browse and Request Food**: User browses food items and submits a request.
3. **Request Processing**: Admin views and processes the request.
4. **Notifications**: User receives a push notification about the request status.

## Contributing
We welcome contributions! Please read our [CONTRIBUTING](CONTRIBUTING.md) guide for more information on how to contribute to this project.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the PWA Foodbank Application. We hope this application helps in efficiently managing food bank services and reaching those in need. If you have any questions or need further assistance, please feel free to open an issue or contact the project maintainers.