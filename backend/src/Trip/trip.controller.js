import TripModel from "../common/models/trip.model.js";

export const addTrip = async (req, res) => {
    const {tripType, groupSize, location, interests, startDate, endDate, notes,} = req.body;
    try {
        const newTrip = new TripModel({
            tripType: tripType,
            groupSize: groupSize,
            location: location,
            interests: interests,
            startDate: startDate,
            endDate: endDate,
            notes: notes,
            user: req.user.id
        });
        await newTrip.save();
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const getAllTrips = async (req, res) => {
    try {
        const trips = await TripModel.find({
            user: req.user.id
        });
        res.status(200).json(trips);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const getTripById = async (req, res) => {
    try {
        const trip = await TripModel.findById(req.params.id);
        if (!trip) {
            res.status(404).json({error: 'Trip not found'});
        }
        res.status(200).json(trip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const updateTrip = async (req, res) => {
    const {tripType, groupSize, location, interests, startDate, endDate, notes} = req.body;
    try {
        const updatedTrip = await TripModel.updateOne(req.params.id, {
            tripType: tripType,
            groupSize: groupSize,
            location: location,
            interests: interests,
            startDate: startDate,
            endDate: endDate,
            notes: notes,
        });
        res.status(200).json(updatedTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const deleteTrip = async (req, res) => {
    try {
        await TripModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Trip deleted'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const getUpcomingTrips = async (req, res) => {
    try {
        const currentDate = new Date();
        const upcomingTrips = await TripModel.find({startDate: {$gt: currentDate}});
        res.status(200).json(upcomingTrips);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const getPastTrips = async (req, res) => {
    try {
        const currentDate = new Date();
        const pastTrips = await TripModel.find({endDate: {$lt: currentDate}});
        res.status(200).json(pastTrips);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
