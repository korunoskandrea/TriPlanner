const express = require('express');
const router = express.Router();
const pastTripModel = require('../common/models/past_trip.model');

router.post('/', async (req, res) => {
    try{
        const newPastTrip = new pastTripModel(req.body);
        await newPastTrip.save();
        res.status(201).json(newPastTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const pastTrips = await pastTripModel.find();
        res.status(200).json(pastTrips);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const pastTrip = await pastTripModel.findById(req.params.id);
        if (!pastTrip) {
            res.status(404).json({error: 'Past Trip not found'});
        }
        res.status(200).json(pastTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPastTrip = await pastTripModel.findByIdAndUpdate(req.params.id, req.body,{ new: true});
        res.status(200).json(updatedPastTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await pastTripModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Past Trip deleted'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;