const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productCategory: {
    type: String,
    required: true,
    //ref: 'ProductCategory'  Reference to the ProductCategory model
  },
  productTitle: {
    type: String,
    required: true
  },
  mainProductImage: {
    type: String,
    
  },
  productDescription: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  productAvailableQuantity: {
    type: Number,
    required: true,
  },
  ratingAverage: {
    type: Number,
    
  },
  productImage: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductImages' 
  }],
  craftOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CraftOwner'
  },
});

module.exports = mongoose.model('Product', productSchema);
