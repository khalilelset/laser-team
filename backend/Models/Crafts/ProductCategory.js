const craftCategorySchema = new mongoose.Schema({
    categoryName: {
      type: String,
      required: true
    },
    product: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product' // Reference to the Crafts model
    }]
  });
  module.exports = mongoose.model('ProductCategory', craftCategorySchema);
  