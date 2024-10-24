const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    locationName: { type: String, required: true },
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Trip;