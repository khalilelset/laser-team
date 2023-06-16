const CraftOwner = require("../../Models/Crafts/CraftOwner");

const getCraftOwnerInfo = async (req, res) => {
  try {
    const craftOwnerEmail = req.params.email; // Retrieve email from URL parameters
    const craftOwner = await CraftOwner.findOne({ email: craftOwnerEmail });
    
    if (!craftOwner) {
      return res.status(404).json({ error: { message: 'Craft owner not found' } });
    }

    res.status(200).json({ craftOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  
  const updateCraftOwnerInfo = async (req, res) => {
    try {
      const craftOwnerEmail = req.locals.email;
      const craftOwner = await CraftOwner.findOneAndUpdate(
        { email: craftOwnerEmail },
        { $set: req.body },
        { new: true }
      );
  
      if (!craftOwner) {
        return res.status(404).json({ error: { message: 'Craft owner not found' } });
      }
  
      res.status(200).json({ craftOwner });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = { getCraftOwnerInfo , updateCraftOwnerInfo };
