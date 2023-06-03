const craftCategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true
  },
  crafts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crafts' // Reference to the Crafts model
  }]
});
module.exports = mongoose.model('CraftCategory', craftCategorySchema);
