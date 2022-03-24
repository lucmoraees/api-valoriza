import { ICreateTag } from '../../../@types';
import Tag from '../../../database/entities/Tag';
import ExceptionError from '../../../errors/ExceptionError';
import TagsRepository from '../../../repositories/TagsRepository';

class CreateTagService {
  constructor (private tagsRepository: TagsRepository) {}

  async execute ({ name }: ICreateTag): Promise<Tag> {
    const tagExists = await this.tagsRepository.findOne({ name });

    if (tagExists) {
      throw new ExceptionError('Uma tag com esse nome já foi criada');
    }

    const newTag = this.tagsRepository.create({ name });

    console.log(newTag);
  
    await this.tagsRepository.save(newTag);

    return newTag;
  }
}

export default CreateTagService;
