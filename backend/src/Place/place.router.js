import { Router } from 'express';
const router = Router();

import {
    addPlace,
    getAllPlaces,
    getPlaceById,
    updatePlace,
    deletePlace,
    populateCountriesAndCities
} from "./place.controller.js";

router.get('/populate-countries-cities', populateCountriesAndCities);
router.post('/', addPlace);
router.get('/', getAllPlaces);
router.get('/:id', getPlaceById);
router.put('/:id', updatePlace);
router.delete('/:id', deletePlace);

export default router;