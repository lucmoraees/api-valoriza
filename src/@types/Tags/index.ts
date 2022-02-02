import { Repository } from "typeorm";
import Tag from "../../database/entities/Tag";

export type ITagsRepository = Repository<Tag> & {}

export interface IListTagsService {
  execute(): Promise<Tag[]>;
}

export interface ICreateTagService {
  execute({}: ICreateTag): Promise<Tag>;
}

export interface ICreateTag {
  name: string; 
}