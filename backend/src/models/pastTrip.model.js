const mongoose = require('mongoose');
const Trip = require('../models/trip.model');

const PastTripSchema = new mongoose.Schema({
    trip: { type: mongoose.Schema.Types.ObjectId, ref:'Trip' ,required: true },
    timePeriod: {
        startDate: { type: Date, default: Date.now, required: true },
        endDate: { type: Date, default: Date.now, required: true },
    }
});

const PastTrip = mongoose.model('PastTrip', PastTripSchema);

module.exports = PastTrip;