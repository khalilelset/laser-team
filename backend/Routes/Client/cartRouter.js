const express = require("express");
const cartController = require("../../Controllers/cartController");
const router = express.Router();

router.route("/api/cart/add/:id").post(cartController.addProductToCart);
router.route("/api/cart/getAllProduct").get(cartController.getProductsFromCart);

module.exports = router;
