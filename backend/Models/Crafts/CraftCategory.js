const craftCategorySchema = new mongoose.Schema({
  CategoryID: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  CategoryName: {
    type: String,
    required: true
  },
  RateCraft: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RateCraft' // Reference to the Crafts model
  }]
});
craftcatSchema.set('primaryKey', 'CategoryID');
module.exports = mongoose.model('RateCraft', craftcatSchema);
