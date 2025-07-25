
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registration route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

// Email verification route
router.post('/verify-email', authController.verifyEmail);

// Password reset routes
router.post('/request-password-reset', authController.requestPasswordReset);
router.put('/reset-password/:token', authController.resetPassword);

// Logout route
router.post('/logout', authController.logout);

module.exports = router;
