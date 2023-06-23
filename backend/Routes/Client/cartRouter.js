const express = require("express");
const cartController = require("../../Controllers/cartController");
const router = express.Router();

router.route("/api/cart/add/:email/:id").post(cartController.addProductToCart);
router
  .route("/api/cart/removeProduct/:email/:id")
  .post(cartController.removeProductFromCart);
router
  .route("/api/cart/getAllProduct/:email")
  .get(cartController.getProductsFromCart);
router
  .route("/api/transaction/add/:email")
  .post(cartController.addToTransaction);

module.exports = router;
