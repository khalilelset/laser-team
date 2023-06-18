const express = require('express');
const router = express.Router();
const CraftOwner=require("../../Controllers/crafts/CraftOwner")
const ProductOfOwner = require("../../Controllers/crafts/ProductOfOwner")
const CraftOfOwner = require("../../Controllers/crafts/CraftOfOwner")


router.get('/api/craftowner/getprofile/:email', CraftOwner.getCraftOwnerInfo);
router.patch('/api/craftowner/updateprofile/:email',CraftOwner.updateCraftOwnerInfo)

router.get('/api/craftowner/getproduct/:email', ProductOfOwner.ProductOfOwner);
router.get('/api/craftowner/getcraft/:email', CraftOfOwner.CraftOfOwner);

module.exports = router;


