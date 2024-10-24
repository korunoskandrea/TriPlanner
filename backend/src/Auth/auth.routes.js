import { Router } from 'express';
import {mustNotBeAuthenticated, mustBeAuthenticated} from "../common/middlewares/guards/auth.guard.js";
import {login, loginPost, register, registerPost} from "./auth.controller.js";
const router = Router();


router.get('/register',[mustNotBeAuthenticated], register);
router.post('/register',[mustNotBeAuthenticated], registerPost);

router.get('/login',[mustNotBeAuthenticated], login);
router.post('/login',[mustNotBeAuthenticated], loginPost);