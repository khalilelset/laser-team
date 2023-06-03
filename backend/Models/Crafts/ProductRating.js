const mongoose = require('mongoose');

const rateProductSchema = new mongoose.Schema({
  productID:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product' 
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  }
});
module.exports = mongoose.model('RateProduct', rateProductSchema);
