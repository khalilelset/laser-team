const Craft = require("../../Models/Crafts/Crafts");
const express = require('express');
const router = express.Router();

router.get('/api/store/Craft', async (req, res) => {
    try {
    const data = await Craft.find();
    res.json(data)
    }
    catch (error) {
    res.status(500).json({ message: error.message })
    }
    });

    router.get('/store/craft/getOne/:id', async (req, res) => {
        try {
        const data = await Craft.findById(req.params.id);
        res.json(data)
        }
        catch (error) {
        res.status(500).json({ message: error.message })
        }
        })

    module.exports = router;