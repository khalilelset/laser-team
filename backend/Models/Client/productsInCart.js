const mongoose = require("mongoose");

const productsInCartSchema = new mongoose.Schema({
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  numOfProduct: {
    type: Number,
    default: 1,
  },
  status: {
    type: Number,
    default: 0, // 0: essa ma dafa3   1: dafa3
  },
});

const productsInCart = mongoose.model("productsInCart", productsInCartSchema);
module.exports = productsInCart;
