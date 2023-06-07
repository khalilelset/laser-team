const Product = require("../../Models/Crafts/Product");
const express = require('express');
const router = express.Router();

router.get('/store/product', async (req, res) => {
    try {
    const data = await Product.find();
    res.json(data)
    }
    catch (error) {
    res.status(500).json({ message: error.message })
    }
    })

 router.get('/store/product/getOne/:id', async (req, res) => {
     try {
     const data = await Product.findById(req.params.id);
     res.json(data)
     }
     catch (error) {
     res.status(500).json({ message: error.message })
     }
     })
     
    module.exports = router;