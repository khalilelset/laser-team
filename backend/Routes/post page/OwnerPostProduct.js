const express = require('express');
const router = express.Router();
const Product =require("../../Models/Crafts/Product")
const PostProductController = require('../../Controllers/crafts/Ownerpostproduct');
const Category =require("../../Controllers/crafts/AddCategory")
const CategoryModel = require("../../Models/Crafts/ProductCategory")

// post update delete route
router.post('/api/post/product/:email', PostProductController.postProduct);
router.patch('/api/product/update', PostProductController.updateProduct);
router.delete('/api/product/delete', PostProductController.deleteProduct);


//put the categories
router.post('/api/post/category', Category.addCategory);

// GET all category

router.get('/api/getall/category', async (req, res) => {
    try {
    const data = await CategoryModel.find();
    res.json(data)
    }
    catch (error) {
    res.status(500).json({ message: error.message })
    }
    });


    // GET NAME OF CATEGORY
    router.get('/api/get/categoryName', async (req, res) => {
        try {
          const data = await CategoryModel.find({}, 'categoryName');
          res.json(data.map(category => category.categoryName));
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });
      

module.exports = router;