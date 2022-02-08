import { Router } from "express";
import EnsureAuthenticate from "../../middlewares/EnsureAuthenticate";
import ListUsersController from "./controllers/ListUsersController";
import CreateUserController from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

router.post('/users', createUserController.execute);
router.get('/users', EnsureAuthenticate, listUsersController.execute);

export default router;
