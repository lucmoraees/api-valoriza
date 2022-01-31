import { getCustomRepository } from "typeorm";
import Tag from "../../../database/entities/Tag";
import TagsRepository from "../../../repositories/TagsRepository";
import { instanceToPlain } from 'class-transformer';

class ListTagsService {
  async execute(): Promise<Tag[]> {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tags = await tagsRepository.find();

    const newInstanceTags = instanceToPlain(tags) as Tag[];

    return newInstanceTags;
  }
}

export default ListTagsService;
