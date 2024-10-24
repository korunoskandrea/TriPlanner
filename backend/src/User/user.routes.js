const express = require('express');
const router = express.Router();
const userModel = require('../common/models/user.model');

router.post('/',async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await userModel.find().populate('UpcomingTrip').populate('PastTrip');
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id).populate('UpcomingTrip').populate('PastTrip');
        if(!user){
            return res.status(404).json({error: 'User Not Found'});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        });
        res.status(200).json(updatedUser);
    }catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: 'User deleted successfully'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;
