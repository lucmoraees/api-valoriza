import { Router } from "express";
import authenticateUserFactory from "./factories/AuthenticateUserFactory";

const router = Router();

router.post('/signin', authenticateUserFactory().execute);

export default router;
