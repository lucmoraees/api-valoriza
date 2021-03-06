import { getCustomRepository } from "typeorm";
import ListTagsController from "../controllers/ListTagsController";
import ListTagsService from "../services/ListTagsService";
import TagsRepository from "../../../repositories/TagsRepository";

const listTagsFactory = () => {
  const tagsRepository = getCustomRepository(TagsRepository);
  const listTagsService = new ListTagsService(tagsRepository);
  const listTagsController = new ListTagsController(listTagsService);

  return listTagsController;
}

export default listTagsFactory;
