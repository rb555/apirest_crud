import { Router } from "express"; 
import { login, register, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validSchema } from "../middlewares/valid.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post('/register',validSchema(registerSchema), register);

router.post('/login', validSchema(loginSchema), login);

router.post('/logout', logout);

router.get('/profile', authRequired, profile);

export default router;