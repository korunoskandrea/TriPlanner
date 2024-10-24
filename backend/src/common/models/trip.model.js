const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    locationName: { type: String, required: true },
    images: [String],
    sightseeingInterests: [String],
});

const Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;