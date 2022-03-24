import { Router } from "express";
import EnsureAuthenticate from "../../middlewares/EnsureAuthenticate";
import listReceiveComplimentsFactory from "./factories/ListReceiveComplimentsFactory";
import listSendComplimentsFactory from "./factories/ListSendComplimentsFactory";
import createComplimentsFactory from "./factories/CreateComplimentsFactory";

const complimentsRoutes = Router();

complimentsRoutes.get('/compliments/receive', EnsureAuthenticate, (req, res) => (
  listReceiveComplimentsFactory().execute(req, res)
));

complimentsRoutes.get('/compliments/send', EnsureAuthenticate, (req, res) => (
  listSendComplimentsFactory().execute(req, res)
));

complimentsRoutes.post('/compliments', EnsureAuthenticate, (req, res) => (
  createComplimentsFactory().execute(req, res)
));

export default complimentsRoutes;
