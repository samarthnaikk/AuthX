
# AuthX API Documentation

This document provides detailed information about the API endpoints and functions used in the AuthX system.

## `authController.js`

This file contains the core logic for handling user authentication.

### 1. `register(req, res)`

-   **Description:** Registers a new user in the system. It checks if the user already exists, hashes the password, generates an OTP for email verification, saves the new user to the database, and sends the OTP to the user's email address.
-   **Route:** `POST /api/auth/register`
-   **Request Body:**
    -   `name` (String, required): The user's name.
    -   `email` (String, required): The user's email address.
    -   `password` (String, required): The user's password.
-   **Responses:**
    -   `201 Created`: User registered successfully. An OTP has been sent to the user's email.
    -   `400 Bad Request`: User already exists.
    -   `500 Internal Server Error`: Server error or error sending email.

### 2. `login(req, res)`

-   **Description:** Logs in an existing user. It checks if the user exists and if the provided password is correct. If the credentials are valid, it generates a JSON Web Token (JWT) and sends it back to the client.
-   **Route:** `POST /api/auth/login`
-   **Request Body:**
    -   `email` (String, required): The user's email address.
    -   `password` (String, required): The user's password.
-   **Responses:**
    -   `200 OK`: Returns a JWT token.
    -   `400 Bad Request`: Invalid credentials.
    -   `500 Internal Server Error`: Server error.

### 3. `verifyEmail(req, res)`

-   **Description:** Verifies a user's email address using the provided OTP. It checks if the user exists and if the OTP is correct and has not expired.
-   **Route:** `POST /api/auth/verify-email`
-   **Request Body:**
    -   `email` (String, required): The user's email address.
    -   `otp` (String, required): The OTP sent to the user's email.
-   **Responses:**
    -   `200 OK`: Email verified successfully.
    -   `400 Bad Request`: User not found or invalid/expired OTP.
    -   `500 Internal Server Error`: Server error.

### 4. `requestPasswordReset(req, res)`

-   **Description:** Initiates the password reset process for a user. It generates a password reset token, saves its hash to the database, and sends an email to the user with a link to reset their password.
-   **Route:** `POST /api/auth/request-password-reset`
-   **Request Body:**
    -   `email` (String, required): The user's email address.
-   **Responses:**
    -   `200 OK`: Email sent with password reset instructions.
    -   `400 Bad Request`: User not found.
    -   `500 Internal Server Error`: Server error or error sending email.

### 5. `resetPassword(req, res)`

-   **Description:** Resets the user's password using a valid reset token. It verifies the token, and if valid, hashes the new password and updates it in the database.
-   **Route:** `PUT /api/auth/reset-password/:token`
-   **URL Parameters:**
    -   `token` (String, required): The password reset token from the email link.
-   **Request Body:**
    -   `password` (String, required): The new password.
-   **Responses:**
    -   `200 OK`: Password reset successful.
    -   `400 Bad Request`: Token is invalid or has expired.
    -   `500 Internal Server Error`: Server error.

### 6. `logout(req, res)`

-   **Description:** Logs out the user. This is a placeholder endpoint, as JWT logout is typically handled on the client-side by deleting the token.
-   **Route:** `POST /api/auth/logout`
-   **Responses:**
    -   `200 OK`: Logout successful.
