
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
 const craftOwnerEmail = req.params.email; // Retrieve email from URL parameters
 const CraftOwnerem = await CraftOwner.findOne({ email: craftOwnerEmail });
    
const craftOwner = CraftOwnerem._id;

    // Create a new craft instance
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

// Update Crafts
const updateCraft = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Crafts.findByIdAndUpdate(
    id, updatedData, options
    )
    res.send(result)
    }
    catch (error) {
    res.status(400).json({ message: error.message })
    }
  }
        
  // delete craft
  
  const deleteCraft = async (req, res) => {
    try {
      const id = req.params.id;
      const craftOwnerEmail = req.locals.email;
      const craftOwner = await CraftOwner.findOne({ email: craftOwnerEmail });
  
      // Remove the product from the craft owner's list of Crafts
      craftOwner.Crafts.pull(productId);
      await craftOwner.save();
      
      const result = await Crafts.findByIdAndDelete(id)
      res.send(result)
      }
      catch (error) {
      res.status(400).json({ message: error.message })
      }
    }
  
  
  

module.exports = { postCraft ,updateCraft,deleteCraft };
