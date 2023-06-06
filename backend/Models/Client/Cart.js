const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productsInCart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "productsInCart",
    },
  ],
  totalPrice: {
    type: Number,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
