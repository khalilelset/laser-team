const express = require('express');
const router = express.Router();
const CraftOwner=require("../../Controllers/crafts/CraftOwner")

router.get('/api/craftowner/getprofile/:email', CraftOwner.getCraftOwnerInfo);

router.patch('/api/craftowner/updateprofile',CraftOwner.updateCraftOwnerInfo)

module.exports = router;


