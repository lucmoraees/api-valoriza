import { getCustomRepository } from 'typeorm';
import { ICreateCompliment } from '../../../@types';
import Compliment from '../../../database/entities/Compliment';
import ExceptionError from '../../../errors/ExceptionError';
import ComplimentsRepository from '../../../repositories/ComplimentsRepository';
import UsersRepository from '../../../repositories/UsersRepository';

class CreateComplimentService {
  constructor (
    private complimentsRepository: ComplimentsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({ tag_id, user_sender, user_receiver, message }: ICreateCompliment): Promise<Compliment> {
    if (user_sender === user_receiver) {
      throw new ExceptionError('Não é possível cadastrar um elogio para você mesmo');
    }

    const userReceiver = await this.usersRepository.findOne(user_receiver);

    if (!userReceiver) {
      throw new ExceptionError('O usuário que receberà o elogio não foi encontrado');
    }

    const newCompliment = this.complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await this.complimentsRepository.save(newCompliment);

    return newCompliment;
  }
}

export default CreateComplimentService;
