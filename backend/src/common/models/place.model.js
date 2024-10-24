import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
    locationName: { type: String, required: true },
});

const Place = mongoose.model('Place', PlaceSchema);

export default Place;