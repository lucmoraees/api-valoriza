import CreateTagController from "../controllers/CreateTagController";
import CreateTagService from "../services/CreateTagService";
import TagsRepository from "../../../repositories/TagsRepository";
import { getCustomRepository } from "typeorm";

const createTagFactory = () => {
  const tagsRepository = getCustomRepository(TagsRepository);
  const createTagService = new CreateTagService(tagsRepository);
  const createTagController = new CreateTagController(createTagService);

  return createTagController;
}

export default createTagFactory;
