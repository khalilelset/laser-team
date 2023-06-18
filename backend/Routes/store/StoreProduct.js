const Product = require("../../Models/Crafts/Product");
const express = require("express");
const router = express.Router();

//get all product

router.get("/api/store/product", async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get product by ID

router.get("/api/store/product/getOne/:id", async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get product by category

router.post("/api/product/category", async (req, res) => {
  try {
    const { productCategory } = req.body;
    const data = await Product.find({ productCategory: productCategory });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
