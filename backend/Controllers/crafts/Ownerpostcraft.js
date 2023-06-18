const CraftOwner = require('../../Models/Crafts/CraftOwner');
const Crafts = require('../../Models/Crafts/Crafts');

const postCraft = async (req, res) => {
  try {
    const {
      craftTitle,
      craftDescription,
      mainCraftImage,
      craftImage,
    } = req.body;

    const craftOwnerEmail = req.params.email; // Retrieve email from URL parameters
    const craftOwner = await CraftOwner.findOne({ email: craftOwnerEmail });

    if (!craftOwner) {
      return res.status(404).json({ error: 'Craft owner not found' });
    }

    const craft = new Crafts({
      craftTitle,
      craftDescription,
      mainCraftImage,
      craftImage,
      craftOwnerID: craftOwner._id,
    });

    const savedCraft = await craft.save();

    craftOwner.crafts.push(savedCraft);
    await craftOwner.save();

    res.status(201).json(savedCraft);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCraft = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Crafts.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCraft = async (req, res) => {
  try {
    const id = req.params.id;
    const craftOwnerEmail = req.params.email;
    const craftOwner = await CraftOwner.findOne({ email: craftOwnerEmail });

    if (!craftOwner) {
      return res.status(404).json({ error: 'Craft owner not found' });
    }

    craftOwner.crafts.pull(id);
    await craftOwner.save();

    const result = await Crafts.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { postCraft, updateCraft, deleteCraft };
