const Product = require("../../Models/Crafts/Product");
const CraftOwner = require("../../Models/Crafts/CraftOwner");

const postProduct = async (req, res) => {
  try {
    const {
      productTitle,
      productDescription,
      price,
      productAvailableQuantity,

      category, // Assuming the category is passed as a string or ID
    } = req.body;

    // Find the craft owner
    const craftOwner = await CraftOwner.findById(req.cookies.session);

    // Create a new product instance
    const product = new Product({
      productTitle,
      productDescription,
      price,
      productAvailableQuantity,
      productCategoryID: category,
      craftOwner: craftOwner,
    });

    // Save the product to the database
    const savedProduct = await product.save();

    // Add the product to the craft owner's list of products
    craftOwner.product.push(savedProduct);
    await craftOwner.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postProduct };
