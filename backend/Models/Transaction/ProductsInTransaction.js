const mongoose = require("mongoose");

const dataSchenma = new mongoose.Schema({
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  product: [
    {
      type: mongoose.Schema.Types.Mixed,
      ref: "Product",
    },
  ],

  numOfProduct: {
    type: Number,
    default: 1,
  },
  status: {
    type: Number,
    default: 0, // 0: essa ma dafa3   1: dafa3
  },
});

const productsInTransaction = mongoose.model(
  "productsInTransaction",
  dataSchenma
);
module.exports = productsInTransaction;
