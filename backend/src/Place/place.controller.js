import PlaceModel from '../common/models/place.model.js';

export const addPlace = async (req, res) => {
    const { name } = req.body;
    try {
        const newPlace = new PlaceModel({ locationName: name });
        await newPlace.save();
        res.status(201).json(newPlace);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllPlaces = async (req, res) => {
    try {
        const places = await PlaceModel.find();
        res.status(200).json({
            places: places
        });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const getPlaceById = async (req, res) => {
    try {
        const place = await PlaceModel.findById(req.params.id);
        if (!place) {
            res.status(404).json({error: 'Place not found'});
        }
        res.status(200).json(place);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const updatePlace = async (req, res) => {
    const { name } = req.body;
    try {
        const updatedPlace = await PlaceModel.findByIdAndUpdate(req.params.id, { locationName: name});
        res.status(200).json(updatedPlace);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const deletePlace = async (req, res) => {
    try {
        await PlaceModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Place deleted'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}