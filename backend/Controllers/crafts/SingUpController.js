const CraftsOwner = require('../../Models/Crafts/CraftOwner');

const signUp = async (req, res) => {
  try {
    const {
    ownerFName,
    ownerLName,
    email,
    ownerPhNumber,
    ownerLocation,
    craftName,
    password,
    ownerDescription,
    ownerImage
    } = req.body;

    // Create a new CraftsOwner instance
    const craftsOwner = new CraftsOwner({
      ownerFName,
      ownerLName,
      email,
      ownerPhNumber,
      ownerLocation,
      craftName,
      password,
      ownerDescription,
      ownerImage
    });

    // Save the CraftsOwner to the database
    const savedCraftsOwner = await craftsOwner.save();

    res.status(201).json(savedCraftsOwner);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("controller error");
  }
};

module.exports = {signUp};
