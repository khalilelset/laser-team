const express = require('express');
const router = express.Router();
const PostCraftController = require('../../Controllers/crafts/Ownerpostcraft');

// Signup route
router.post('/post/craft', PostCraftController.postCraft);

module.exports = router;