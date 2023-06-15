const express = require('express');
const router = express.Router();
const PostCraftController = require('../../Controllers/crafts/Ownerpostcraft');

// Signup route
router.post('/api/post/craft', PostCraftController.postCraft);
router.patch('/api/craft/update', PostCraftController.updateCraft);
router.delete('/api/craft/delet', PostCraftController.deleteCraft);

module.exports = router;