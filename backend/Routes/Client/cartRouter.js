const express = require("express");
const cartController = require("../../Controllers/cartController");
const router = express.Router();

router.route("/api/cart/add").post(cartController.addProduct);

module.exports = router;
