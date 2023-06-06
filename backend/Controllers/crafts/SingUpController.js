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

    // Generate a session or token for authentication (implementation depends on your chosen method)
    const session = savedCraftsOwner._id;

/*
    // Save the Craft Owner's ID in the session or token
    session.craftOwnerId = savedCraftsOwner._id;*/
    res.cookie("session", session, {
      maxAge: 60 * 60 * 24 * 30 * 1000,
    });
    // Return the saved CraftsOwner and the session or token in the response
    res.status(201).json({
      craftsOwner: savedCraftsOwner,
      session
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("controller sign up error");
  }
};

module.exports = { signUp };
