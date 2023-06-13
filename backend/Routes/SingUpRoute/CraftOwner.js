const express = require('express');
const router = express.Router();
const signupController = require('../../Controllers/crafts/SingUpController');

// Signup route
router.post('/api/signup/craftowner', signupController.signUp);

// login route

router.post('/api/signup/craftowner', signupController.login);

// logout route
router.post('/api/signup/craftowner', signupController.logout);


module.exports = router;
