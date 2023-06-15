const express = require('express');
const router = express.Router();
const PostProductController = require('../../Controllers/crafts/Ownerpostproduct');
const Category =require("../../Controllers/crafts/AddCategory")

// post update delete route
router.post('/api/post/product', PostProductController.postProduct);
router.patch('/api/product/update', PostProductController.updateProduct);
router.delete('/api/product/delete', PostProductController.deleteProduct);


//put the categories
router.post('/api/post/category', Category.addCategory);

module.exports = router;