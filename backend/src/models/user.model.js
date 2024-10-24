const mongoose = require('mongoose');
const Trip = require('../models/trip.model');
const UpcomingTrip = require('./upcomingTrip.model');
const PastTrip = require('./pastTrip.model');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    birthday: { type: Date, required: true },
    interestedIn: [String],
    pastTrips: [{type: mongoose.Schema.Types.ObjectId, ref: 'PastTrip'}],
    upcomingTrips: [{type: mongoose.Schema.Types.ObjectId, ref: 'UpcomingTrip'}],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;