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
  RatingAverage: {
    type: Number,
    required: true,
    
  },
  /*
  ProductImage: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductImages' // Reference to the Crafts model
  }],*/
  CraftOwner: {
    type: mongoose.Schema.Types.ObjectId,
    re: 'CraftOwner' // Reference to the Crafts model
  }
});

module.exports = mongoose.model('Product', productSchema);