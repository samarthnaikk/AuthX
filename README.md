# AuthX

AuthX is a secure and scalable authentication system built with the MERN stack. It provides a robust foundation for managing user authentication and authorization in your web applications.

## Tech Stack

### Backend

*   **Node.js:** A JavaScript runtime for building fast and scalable server-side applications.
*   **Express:** A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
*   **MongoDB:** A NoSQL database for storing user data.
*   **Mongoose:** An object data modeling (ODM) library for MongoDB and Node.js.
*   **JSON Web Tokens (JWT):** For creating access tokens for authentication.
*   **bcrypt:** A library for hashing passwords.
*   **Nodemailer:** A module for Node.js applications to allow easy as cake email sending.
*   **googleapis:** To use Google APIs.
*   **CORS:** A node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
*   **csurf:** Node.js CSRF protection middleware.
*   **dotenv:** A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
*   **Helmet:** Helps you secure your Express apps by setting various HTTP headers.
*   **express-rate-limit:** Basic rate-limiting middleware for Express.

### Frontend

*   **React:** A JavaScript library for building user interfaces.
*   **React Scripts:** A set of scripts and configurations used by Create React App.

## Features

*   **User Registration:** New users can register with their name, email, and password.
*   **User Login:** Registered users can log in to get a JWT token for accessing protected routes.
*   **Email Verification:** Users receive an OTP on their email for verification.
*   **Password Reset:** Users can request a password reset link to their email.
*   **Secure Password Storage:** Passwords are hashed using bcrypt before storing in the database.
*   **CSRF Protection:** Implemented csurf for protection against Cross-Site Request Forgery.
*   **Security Headers:** Used Helmet to set various security-related HTTP headers.
*   **Rate Limiting:** Implemented rate limiting to protect against brute-force attacks.

## Upcoming Features

*   **Two-Factor Authentication (2FA):** Implementing 2FA for an extra layer of security.
*   **Social Logins:** Allowing users to log in with their social media accounts like Google, Facebook, etc.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/samarthnaikk/AuthX.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Install NPM packages for the frontend
    ```sh
    npm install --prefix frontend
    ```
4.  Create a `.env` file in the root directory and add the following variables:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    EMAIL=your_email
    PASSWORD=your_password
    ```
5.  Start the server
    ```sh
    npm start
    ```
6.  Start the frontend
    ```sh
    npm start --prefix frontend
    ```
