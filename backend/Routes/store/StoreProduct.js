const Product = require("../../Models/Crafts/Product");
const Crafts = require("../../Models/Crafts/Crafts");
const CraftOwner=require("../../Models/Crafts/CraftOwner")
const express = require("express");
const router = express.Router();

//get all product

router.get("/api/store/product", async (req, res) => {
  try {
    const data = await Product.find().sort({ _id: -1 });
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


//get owner by product

router.get("/api/craftowner/portfolio/productid/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const ownerid = product.craftOwner;
    const owner = await CraftOwner.findById(ownerid);//sar ma3ak kel ma3loumet l owner
    const productIds = owner.product; // Array of product IDs
    const products = await Product.find({ _id: { $in: productIds } });
    const craftIds = owner.crafts; // Array of craft IDs
    const crafts = await Crafts.find({ _id: { $in: craftIds } });

    const responseData = {
      ownerFName: owner.ownerFName,
      ownerLName: owner.ownerLName,
      ownerImage: owner.ownerImage,
      ownerDescription:owner.ownerDescription,
      ownerLocation: owner.ownerLocation,
      
      product: products.map((p) => ({
        _id: p._id,
        productTitle: p.productTitle,
        mainProductImage:p.mainProductImage,
        productDescription:p.productDescription,
        price:p.price,
        productAvailableQuantity: p.productAvailableQuantity,
        
      })),
      craft: crafts.map((c) => ({
        _id: c._id,
        craftTitle: c.craftTitle,
        mainCraftImage: c.mainCraftImage,
        craftDescription: c.craftDescription,
      })),
    };
    res.status(200).json(responseData);
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
