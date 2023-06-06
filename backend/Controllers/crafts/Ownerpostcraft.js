
const CraftOwner = require('../../Models/Crafts/CraftOwner');
const Crafts = require('../../Models/Crafts/Crafts');

const postCraft = async (req, res) => {
  try {
    const {
      craftTitle,
      craftDescription,
      category, // Assuming the category is passed as a string or ID
    } = req.body;

  
// Find the craft owner
const craftOwner = await CraftOwner.findById(req.cookies.session);

    // Create a new product instance
    const craft = new Crafts({
      craftTitle,
      craftDescription,
      categoryID: category,
      craftOwnerID: craftOwner,
    });

    // Save the product to the database
    const savedCraft = await craft.save();

    // Add the product to the craft owner's list of products
    craftOwner.crafts.push(savedCraft);
    await craftOwner.save();

    res.status(201).json(savedCraft);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postCraft };
