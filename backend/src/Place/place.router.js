import { Router } from 'express';
const router = Router();

import {addPlace, getAllPlaces, getPlaceById, updatePlace, deletePlace} from "./place.controller.js";

router.post('/', addPlace);
router.get('/', getAllPlaces);
router.get('/:id', getPlaceById);
router.put('/:id', updatePlace);
router.delete('/:id', deletePlace);

export default router;