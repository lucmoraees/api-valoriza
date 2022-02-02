import { Router } from "express";
import EnsureAuthenticate from "../../middlewares/EnsureAuthenticate";
import ListUsersController from "./controllers/ListUsersController";
import createUserFactory from "./factories/CreateUserFactory";

const router = Router();

const listUsersController = new ListUsersController();

router.post('/users', createUserFactory().execute);
router.get('/users', EnsureAuthenticate, listUsersController.execute);

export default router;
