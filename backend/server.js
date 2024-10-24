const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// connect to MongoDb
mongoose.connect(process.env.MONGODB_URI, {});
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});
// routes and middleware
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});