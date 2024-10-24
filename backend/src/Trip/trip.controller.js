import TripModel from "../common/models/trip.model.js";

export const addTrip = async (req, res) => {
    const { locationName, images, sightseeingInterests, startDate, endDate } = req.body;
    try{
        const newTrip = new TripModel({
            locationName: locationName,
            images: images,
            sightseeingInterests: sightseeingInterests,
            startDate: startDate,
            endDate: endDate,
        });
        await newTrip.save();
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const getAllTrips = async (req, res) => {
    try {
        const trips = await TripModel.find();
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
    const { locationName, images, sightseeingInterests, startDate, endDate } = req.body;
    try{
        const updatedTrip = new TripModel({
            locationName: locationName,
            images: images,
            sightseeingInterests: sightseeingInterests,
            startDate: startDate,
            endDate: endDate,
        });
        res.status(200).json(updatedTrip);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const deleteTrip = async (req, res) => {
    try {
        await TripModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Trip deleted'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}