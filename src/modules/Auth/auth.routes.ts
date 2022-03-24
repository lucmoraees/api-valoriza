import { Router } from "express";
import authenticateUserFactory from "./factories/AuthenticateUserFactory";

const router = Router();

router.post('/signin', (req, res) => authenticateUserFactory().execute(req, res));

export default router;