import { Router } from "express";
import EnsureAuthenticate from "../../middlewares/EnsureAuthenticate";
import listUserFactory from "./factories/ListUserFactory";
import createUserFactory from "./factories/CreateUserFactory";

const router = Router();

router.post('/users', (req, res) => createUserFactory().execute(req, res));

router.get('/users', EnsureAuthenticate, (req, res) => listUserFactory().execute(req, res));

export default router;
