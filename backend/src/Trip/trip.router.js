import { Router } from 'express';
const router = Router();

import {
    addTrip,
    getAllTrips,
    getTripById,
    updateTrip,
    deleteTrip,
    getPastTrips,
    getUpcomingTrips
} from "./trip.controller.js";
import {mustBeAuthenticated} from "../common/middlewares/guards/auth.guard.js";

router.post('/', addTrip);
router.get('/', getAllTrips);
router.get('/:id', [mustBeAuthenticated], getTripById);
router.put('/:id', updateTrip);
router.delete('/:id', deleteTrip);
router.get('/upcoming', [mustBeAuthenticated], getUpcomingTrips);
router.get('/past',[mustBeAuthenticated], getPastTrips);

export default router;