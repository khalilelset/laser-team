const Craft = require("../../Models/Crafts/Crafts");
const express = require('express');
const router = express.Router();

router.get('/store/Craft', async (req, res) => {
    try {
    const data = await Product.find();
    res.json(data)
    }
    catch (error) {
    res.status(500).json({ message: error.message })
    }
    })
    module.exports = router;