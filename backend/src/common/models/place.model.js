import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
    countryName: { type: String, required: true },
    cities: [{ type: String }]
});

const Place = mongoose.model('Place', PlaceSchema);

export default Place;