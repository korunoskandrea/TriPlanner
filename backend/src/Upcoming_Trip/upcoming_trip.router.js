const express = require('express');
const router = express.Router();
const upcomingTripModel = require('../common/models/upcoming_trip.model');

router.post('/', async (req, res) => {
    try{
        const newUpcomingTrip = new upcomingTripModel(req.body);
        await newUpcomingTrip.save();
        res.status(201).json(newUpcomingTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const upcomingTrips = await upcomingTripModel.find();
        res.status(200).json(upcomingTrips);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const upcomingTrip = await upcomingTripModel.findById(req.params.id);
        if (!upcomingTrip) {
            res.status(404).json({error: 'Upcoming Trip not found'});
        }
        res.status(200).json(upcomingTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedUpcomingTrip = await upcomingTripModel.findByIdAndUpdate(req.params.id, req.body,{ new: true});
        res.status(200).json(updatedUpcomingTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await upcomingTripModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Upcoming Trip deleted'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;