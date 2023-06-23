const mongoose = require("mongoose");

const dataSchenma = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  productsInTransaction: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "productintransaction",
    },
  ],
  totalPrice: {
    type: Number,
  },
  Location: {
    type: Location,
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", dataSchenma);
module.exports = Transaction;
