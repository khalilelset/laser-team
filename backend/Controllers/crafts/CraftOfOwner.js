const Craft = require("../../Models/Crafts/Crafts");
const CraftOwner = require("../../Models/Crafts/CraftOwner");

async function CraftOfOwner(req, res) {
  try {
    const craftOwnerEmail = req.params.email; // Retrieve email from URL parameters
    const craftOwner = await CraftOwner.findOne({ email: craftOwnerEmail });
    if (!craftOwner) {
      return res.status(404).json({ error: 'Craft owner not found' });
    }
    
    const craftIds = craftOwner.crafts; // Array of product IDs
    const craft = await Craft.find({ _id: { $in: craftIds } });

    return res.json(craft);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { CraftOfOwner };
