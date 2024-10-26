import { Router } from 'express';
const router = Router();

import {addUser, getUserById} from "./user.controller.js";

router.post('/',addUser);
router.get('/:id',getUserById);

export default router;