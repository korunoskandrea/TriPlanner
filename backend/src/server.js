import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

import placeRoutes from './Place/place.router.js';
import {fetchJwt} from "./common/middlewares/fetch_jwt.js";
import {mustBeAuthenticated, mustNotBeAuthenticated} from "./common/middlewares/guards/auth.guard.js";
import tripRouters from "./Trip/trip.router.js";
import userRoutes from "./User/user.routes.js";
import authRoutes from "./Auth/auth.routes.js";
config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(fetchJwt);

app.use('/api/places', placeRoutes);
app.use('/api/trips',[mustBeAuthenticated], tripRouters);
app.use('/api/user',[mustBeAuthenticated], userRoutes);
app.use('/api/auth', [mustNotBeAuthenticated],authRoutes);
// connect to MongoDb
mongoose.connect(process.env.MONGODB_URI, {});
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});