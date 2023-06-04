const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productCategoryID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'ProductCategory' // Reference to the ProductCategory model
  },
  productTitle: {
    type: String,
    required: true
  },
  mainProductImage: {
    type: String,
    //required: true
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
