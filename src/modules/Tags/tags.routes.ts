import { Router } from "express";
import EnsureAdmin from "../../middlewares/EnsureAdmin";
import EnsureAuthenticate from "../../middlewares/EnsureAuthenticate";
import createTagFactory from "./factories/CreateTagFactory";
import listTagsFactory from "./factories/ListTagsFactory";

const tagsRoutes = Router();

tagsRoutes.get('/tags', EnsureAuthenticate, listTagsFactory().execute);
tagsRoutes.post('/tags', EnsureAuthenticate, EnsureAdmin, createTagFactory().execute);

export default tagsRoutes;
