const express = require('express');
const router = express.Router();
const placeModel = require('../common/models/place.model');

router.post('/', async (req, res) => {
    try{
        const newPlace = new placeModel(req.body);
        await newPlace.save();
        res.status(201).json(newPlace);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const places = await placeModel.find();
        res.status(200).json(places);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const place = await placeModel.findById(req.params.id);
        if (!place) {
            res.status(404).json({error: 'Place not found'});
        }
        res.status(200).json(place);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPlace = await placeModel.findByIdAndUpdate(req.params.id, req.body,{ new: true});
        res.status(200).json(updatedPlace);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await placeModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Place deleted'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;