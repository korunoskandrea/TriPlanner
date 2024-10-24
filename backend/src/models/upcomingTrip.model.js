const mongoose = require('mongoose');
const Trip = require('../models/trip.model');

const UpcomingTripSchema = new mongoose.Schema({
    trip: { type: mongoose.Schema.Types.ObjectId, ref:'Trip' ,required: true },
    timePeriod: {
        startDate: { type: Date, default: Date.now, required: true },
        endDate: { type: Date, default: Date.now, required: true },
    }
});

const UpcomingTrip = mongoose.model('UpcomingTrip', UpcomingTripSchema);

module.exports = UpcomingTrip;