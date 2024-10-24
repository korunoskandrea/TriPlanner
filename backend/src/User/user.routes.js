import { Router } from 'express';
const router = Router();

import  {addUser} from "./user.controller.js";

router.post('/',addUser);

export default router;