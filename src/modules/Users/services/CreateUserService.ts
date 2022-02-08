import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from "../../../database/entities/User";
import ExceptionError from "../../../errors/ExceptionError";
import UsersRepository from "../../../repositories/UsersRepository";
import { ICreateUser } from "../../../@types";

class CreateUserService {
  async execute ({ name, email, password, admin = false }: ICreateUser): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findOne({ email });

    if (userExists) {
      throw new ExceptionError('Esse email já está sendo utilizado');
    }

    const hashPassword = await hash(password, 8);

    const user = usersRepository.create({
      name, email, admin, password: hashPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
