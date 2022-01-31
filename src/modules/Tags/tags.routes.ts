import { Router } from "express";
import EnsureAdmin from "../../middlewares/EnsureAdmin";
import EnsureAuthenticate from "../../middlewares/EnsureAuthenticate";
import ListTagsController from "./controllers/ListTagsController";
import CreateTagController from "./controllers/CreateTagController";

const tagsRoutes = Router();

const listTagsController = new ListTagsController();
const createTagController = new CreateTagController();

tagsRoutes.get('/tags', EnsureAuthenticate, listTagsController.execute);
tagsRoutes.post('/tags', EnsureAuthenticate, EnsureAdmin, createTagController.execute);

export default tagsRoutes;
