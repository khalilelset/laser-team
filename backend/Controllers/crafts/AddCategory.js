const Category = require("../../Models/Crafts/ProductCategory");
const Product = require("../../Models/Crafts/Product");

const addCategory = async (req, res) => {
  try {
    const {
     categoryName,
    } = req.body;

    // Create a new product instance
    const category = new Category({
        categoryName,
    });

    // Save the product to the database
    const savedCategory = await category.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { addCategory };

