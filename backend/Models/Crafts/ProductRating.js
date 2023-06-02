const mongoose = require('mongoose');

const rateProductSchema = new mongoose.Schema({
  CraftID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product' 
  },
  Rating: {
    type: Number,
  }
});
module.exports = mongoose.model('RateProduct', rateProductSchema);
