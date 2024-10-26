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

router.post('/', addTrip);
router.get('/', getAllTrips);
router.get('/:id', getTripById);
router.put('/:id', updateTrip);
router.delete('/:id', deleteTrip);
router.get('/upcoming', getUpcomingTrips);
router.get('/past', getPastTrips);

export default router;