# AuthX Backend Documentation

## controllers/authController.js

### register
Registers a new user:
- Checks if the user already exists by email.
- Hashes the password.
- Generates a 6-digit OTP for email verification.
- Creates and saves the user with OTP and expiry.
- Sends OTP to the user's email.
- Returns success or error messages.

### login
Authenticates a user:
- Finds user by email.
- Compares password using bcrypt.
- If valid, creates a JWT token and returns it.
- Handles errors and invalid credentials.

### verifyEmail
Verifies user's email:
- Checks user by email.
- Validates OTP and expiry.
- Marks user as verified, removes OTP fields.
- Returns success or error messages.

### requestPasswordReset
Initiates password reset:
- Finds user by email.
- Generates a reset token and expiry.
- Saves token to user.
- Sends password reset link via email.
- Handles errors and cleans up on failure.

### resetPassword
Resets user's password:
- Finds user by hashed reset token and checks expiry.
- Hashes and sets new password.
- Removes reset token fields.
- Returns success or error messages.

### logout
Logs out user (placeholder):
- Returns a success message.
- Note: JWT logout is typically handled client-side.

---

## routes/auth.js

Defines API routes and maps them to controller functions:
- `/register` → register
- `/login` → login
- `/verify-email` → verifyEmail
- `/request-password-reset` → requestPasswordReset
- `/reset-password/:token` → resetPassword
- `/logout` → logout

---

## models/user.js

Defines the User schema:
- Fields: name, email, password, isVerified, otp, otpExpires, passwordResetToken, passwordResetExpires.
- Handles user data, verification, and password reset tokens.
- Exports the User model for use in controllers.
