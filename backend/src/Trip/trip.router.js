import { Router } from 'express';
const router = Router();

import {addTrip, getAllTrips, getTripById, updateTrip, deleteTrip} from "./trip.controller.js";

router.post('/', addTrip);
router.get('/', getAllTrips);
router.get('/:id', getTripById);
router.put('/:id', updateTrip);
router.delete('/:id', deleteTrip);

export default router;