import Tag from "../../../database/entities/Tag";
import TagsRepository from "../../../repositories/TagsRepository";
import { instanceToPlain } from 'class-transformer';

class ListTagsService {
  constructor (private tagsRepository: TagsRepository) {}

  async execute(): Promise<Tag[]> {
    const tags = await this.tagsRepository.find();

    const newInstanceTags = instanceToPlain(tags) as Tag[];

    return newInstanceTags;
  }
}

export default ListTagsService;
