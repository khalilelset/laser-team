
const Product = require("../../Models/Crafts/Product");
const CraftOwner = require("../../Models/Crafts/CraftOwner");

const postProduct = async (req, res) => {
  try {
    const {
      productTitle,
      productDescription,
      price,
      productAvailableQuantity,
      productCategory,
       // Assuming the category is passed as a string or ID
    } = req.body;

    // Find the craft owner
    const craftOwnerEmail = req.locals.email;
    const CraftOwnerem = await CraftOwner.findOne({ email: craftOwnerEmail });
    const craftOwner = CraftOwnerem._id;
    // Create a new product instance
    const product = new Product({
      productTitle,
      productDescription,
      price,
      productAvailableQuantity,
      productCategory,
      craftOwner,
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

// Update product
const updateProduct = async (req, res) => {
try {
  const id = req.params.id;
  const updatedData = req.body;
  const options = { new: true };
  const result = await Product.findByIdAndUpdate(
  id, updatedData, options
  )
  res.send(result)
  }
  catch (error) {
  res.status(400).json({ message: error.message })
  }
}
      
// delete product

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const craftOwnerEmail = req.locals.email;
    const craftOwner = await CraftOwner.findOne({ email: craftOwnerEmail });

    // Remove the product from the craft owner's list of products
    craftOwner.products.pull(productId);
    await craftOwner.save();
    
    const result = await Product.findByIdAndDelete(id)
    res.send(result)
    }
    catch (error) {
    res.status(400).json({ message: error.message })
    }
  }








module.exports = { postProduct ,updateProduct ,deleteProduct };
