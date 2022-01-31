import { Router } from "express";
import EnsureAuthenticate from "../../middlewares/EnsureAuthenticate";
import ListReceiveComplimentsController from "./controllers/ListReceiveComplimentsController";
import ListSendComplimentsController from "./controllers/ListSendComplimentsController";
import CreateComplimentController from "./controllers/CreateComplimentController";

const complimentsRoutes = Router();

const listReceiveComplimentsController = new ListReceiveComplimentsController();
const listSendComplimentsController = new ListSendComplimentsController();
const createComplimentController = new CreateComplimentController();

complimentsRoutes.get('/compliments/receive', EnsureAuthenticate, listReceiveComplimentsController.execute);
complimentsRoutes.get('/compliments/send', EnsureAuthenticate, listSendComplimentsController.execute);
complimentsRoutes.post('/compliments', EnsureAuthenticate, createComplimentController.execute);

export default complimentsRoutes;
