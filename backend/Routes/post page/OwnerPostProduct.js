const express = require('express');
const router = express.Router();
const PostProductController = require('../../Controllers/crafts/Ownerpostproduct');

// Signup route
router.post('/api/post/product', PostProductController.postProduct);
router.patch('/api/product/update', PostProductController.updateProduct);
router.delete('/api/product/delete', PostProductController.deleteProduct);

module.exports = router;