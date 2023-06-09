const express = require('express');
const router = express.Router();
const PostCraftController = require('../../Controllers/crafts/Ownerpostcraft');

// Signup route
router.post('/api/post/craft/:email', PostCraftController.postCraft);
router.patch('/api/craft/update/:id', PostCraftController.updateCraft);
router.delete('/api/craft/delet/:id/:email', PostCraftController.deleteCraft);

module.exports = router;