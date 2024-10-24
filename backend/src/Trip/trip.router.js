const express = require('express');
const router = express.Router();
const tripModel = require('../common/models/trip.model');

router.post('/', async (req, res) => {
    try{
        const newTrip = new tripModel(req.body);
        await newTrip.save();
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
   try {
       const trips = await tripModel.find();
       res.status(200).json(trips);
   } catch (error) {
       res.status(400).json({error: error.message});
   }
});

router.get('/:id', async (req, res) => {
   try {
       const trip = await tripModel.findById(req.params.id);
       if (!trip) {
           res.status(404).json({error: 'Trip not found'});
       }
       res.status(200).json(trip);
   } catch (error) {
       res.status(400).json({error: error.message});
   }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTrip = await tripModel.findByIdAndUpdate(req.params.id, req.body,{ new: true});
        res.status(200).json(updatedTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await tripModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Trip deleted'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;