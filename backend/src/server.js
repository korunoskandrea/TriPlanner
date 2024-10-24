const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const userRoutes = require('./User/user.routes');
const upcomingTripRoutes = require('./Upcoming_Trip/upcoming_trip.router');
const tripRoutes = require('./Trip/trip.router');
const placeRoutes = require('./Place/place.router');
const pastTripRoutes = require('./Past_Trip/past_trip.router');

// connect to MongoDb
mongoose.connect(process.env.MONGODB_URI, {});
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});