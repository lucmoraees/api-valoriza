import { getCustomRepository } from "typeorm";
import Tag from "../../../database/entities/Tag";
import TagsRepository from "../../../repositories/TagsRepository";
import { instanceToPlain } from 'class-transformer';
import { ITagsRepository } from "../../../@types";

class ListTagsService {
  constructor(private tagsRepository: ITagsRepository) {}

  async execute(): Promise<Tag[]> {
    const tags = await this.tagsRepository.find();

    const newInstanceTags = instanceToPlain(tags) as Tag[];

    return newInstanceTags;
  }
}

export default ListTagsService;
