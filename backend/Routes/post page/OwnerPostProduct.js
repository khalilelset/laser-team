const express = require('express');
const router = express.Router();
const PostProductController = require('../../Controllers/crafts/Ownerpostproduct');

// Signup route
router.post('/post/product', PostProductController.postProduct);

module.exports = router;