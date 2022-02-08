import { getCustomRepository } from 'typeorm';
import { ICreateCompliment } from '../../../@types';
import Compliment from '../../../database/entities/Compliment';
import ExceptionError from '../../../errors/ExceptionError';
import ComplimentsRepository from '../../../repositories/ComplimentsRepository';
import UsersRepository from '../../../repositories/UsersRepository';

class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: ICreateCompliment): Promise<Compliment> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    if (user_sender === user_receiver) {
      throw new ExceptionError('Não é possível cadastrar um elogio para você mesmo');
    }

    const userReceiver = await usersRepository.findOne(user_receiver);

    if (!userReceiver) {
      throw new ExceptionError('O usuário que receberà o elogio não foi encontrado');
    }

    const newCompliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentsRepository.save(newCompliment);

    return newCompliment;
  }
}

export default CreateComplimentService;
