import { getCustomRepository } from 'typeorm';
import { ICreateTag } from '../../../@types';
import Tag from '../../../database/entities/Tag';
import ExceptionError from '../../../errors/ExceptionError';
import TagsRepository from '../../../repositories/TagsRepository';

class CreateTagService {
  async execute ({ name }: ICreateTag): Promise<Tag> {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tagExists = await tagsRepository.findOne({ name });

    if (tagExists) {
      throw new ExceptionError('Uma tag com esse nome já foi criada');
    }

    const newTag = tagsRepository.create({ name });

    console.log(newTag);
  
    await tagsRepository.save(newTag);

    return newTag;
  }
}

export default CreateTagService;
