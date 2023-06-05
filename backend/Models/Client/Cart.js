const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  numOfProduct: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
    default: 0, //  0:Payed Incompleted    1:Payed completed
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
