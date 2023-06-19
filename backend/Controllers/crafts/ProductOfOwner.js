const Product = require("../../Models/Crafts/Product");
const CraftOwner = require("../../Models/Crafts/CraftOwner");

async function ProductOfOwner(req, res) {
  try {
    const craftOwnerEmail = req.params.email; // Retrieve email from URL parameters
    const craftOwner = await CraftOwner.findOne({ email: craftOwnerEmail });;
    if (!craftOwner) {
      throw new Error('Craft owner not found');
    }
    
    const productIds = craftOwner.product; // Array of product IDs
    const products = await Product.find({ _id: { $in: productIds } });
    return res.json(products);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    throw error; // Rethrow the error to be handled by the caller
  }
}
module.exports = { ProductOfOwner };