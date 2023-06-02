const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    /*
  ProductCategoryID: {
    type: Number,
    required: true,
    ref: 'CraftsOwner' // Reference to the CraftsOwner model
  },*/
  ProductTitle: {
    type: String,
    required: true
  },
  MainProductImage: {
    type: String,
    required: true
  },
  ProductDescription: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true,
    
  },
  ProductAvailableQuantity: {
    type: Number,
    required: true,
    
  },
  RatingAverage:{
    type: Number,
    required: true,
    
  },
  
  ProductImage: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductImages' 
  }],

  CraftOwner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CraftOwner'
  },
});

module.exports = mongoose.model('Product', productSchema);
