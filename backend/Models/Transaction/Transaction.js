const mongoose = require("mongoose");

const dataSchenma = new mongoose.Schema({
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  productsInTransaction: [
    {
      type: mongoose.Schema.Types.Mixed,
      ref: "productsInCart",
    },
  ],
  totalPrice: {
    type: Number,
  },
  Location: {
    type: String,
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", dataSchenma);
module.exports = Transaction;
