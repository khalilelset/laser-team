const mongoose = require('mongoose');

const productImagesSchema = new mongoose.Schema({
  ProductID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    index: true,
    ref: 'Product'
  },
  ProductImages: {
    type: String,
  },
});


module.exports = mongoose.model('ProductImages', productImagesSchema);