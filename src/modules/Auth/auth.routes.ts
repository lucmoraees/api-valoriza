import { Router } from "express";
import AuthenticateUserController from "./controllers/AuthenticateUserController";

const router = Router();

const authenticateUserController = new AuthenticateUserController();

router.post('/signin', authenticateUserController.execute);

export default router;
