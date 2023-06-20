const Craft = require("../../Models/Crafts/Crafts");
const Product=require("../../Models/Crafts/Product")
const CraftOwner=require("../../Models/Crafts/CraftOwner")
const express = require('express');
const router = express.Router();

router.get('/api/store/Craft', async (req, res) => {
    try {
    const data = await Craft.find();
    res.json(data)
    }
    catch (error) {
    res.status(500).json({ message: error.message })
    }
    });

    router.get('/store/craft/getOne/:id', async (req, res) => {
        try {
        const data = await Craft.findById(req.params.id);
        res.json(data)
        }
        catch (error) {
        res.status(500).json({ message: error.message })
        }
        })
        
//get portfolio by craft id


router.get("/api/craftowner/portfolio/craftid/:id", async (req, res) => {
    try {
      const craft = await Craft.findById(req.params.id);
      const ownerid = craft.craftOwnerID;
      const owner = await CraftOwner.findById(ownerid);//sar ma3ak kel ma3loumet l owner
      const productIds = owner.product; // Array of product IDs
      const products = await Product.find({ _id: { $in: productIds } });
      const craftIds = owner.crafts; // Array of craft IDs
      const crafts = await Craft.find({ _id: { $in: craftIds } });
  
      const responseData = {
        ownerFName: owner.ownerFName,
        ownerLName: owner.ownerLName,
        ownerImage: owner.ownerImage,
        ownerDescription:owner.ownerDescription,
        ownerLocation: owner.ownerLocation,
        
        product: products.map((p) => ({
          productTitle: p.productTitle,
          mainProductImage:p.mainProductImage,
          productDescription:p.productDescription,
          price:p.price,
          productAvailableQuantity: p.productAvailableQuantity,
          
        })),
        craft: crafts.map((c) => ({
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








    module.exports = router;