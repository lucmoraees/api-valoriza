import { Router } from "express";
import EnsureAdmin from "../../middlewares/EnsureAdmin";
import EnsureAuthenticate from "../../middlewares/EnsureAuthenticate";
import listTagsFactory from "./factories/ListTagsFactory";
import createTagFactory from "./factories/CreateTagFactory";

const tagsRoutes = Router();

tagsRoutes.get('/tags', EnsureAuthenticate, (req, res) => listTagsFactory().execute(req, res));
tagsRoutes.post('/tags', EnsureAuthenticate, EnsureAdmin, (req, res) => createTagFactory().execute(req, res));

export default tagsRoutes;
