import { Router } from 'express';
const router = Router();
import { loginPost, registerPost} from "./auth.controller.js";

router.post('/register', registerPost);
router.post('/login', loginPost);

export default router;