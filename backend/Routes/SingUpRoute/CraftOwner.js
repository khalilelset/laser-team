const express = require('express');
const router = express.Router();
const signupController = require('../../Controllers/crafts/SingUpController');

// Signup route
router.post('/signup/craftowner', signupController.signUp);

module.exports = router;
