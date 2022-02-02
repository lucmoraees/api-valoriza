import { Router } from "express";
import EnsureAuthenticate from "../../middlewares/EnsureAuthenticate";
import createComplimentsFactory from "./factories/CreateComplimentsFactory";
import listReceiveComplimentsFactory from "./factories/ListReceiveComplimentsFactory";
import listSendComplimentsFactory from "./factories/ListSendComplimentsFactory";


const complimentsRoutes = Router();

complimentsRoutes.get('/compliments/receive', EnsureAuthenticate, createComplimentsFactory().execute);
complimentsRoutes.get('/compliments/send', EnsureAuthenticate, listReceiveComplimentsFactory().execute);
complimentsRoutes.post('/compliments', EnsureAuthenticate, listSendComplimentsFactory().execute);

export default complimentsRoutes;
