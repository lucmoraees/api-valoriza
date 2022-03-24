import { hash } from 'bcryptjs';
import User from "../../../database/entities/User";
import ExceptionError from "../../../errors/ExceptionError";
import UsersRepository from "../../../repositories/UsersRepository";
import { ICreateUser } from "../../../@types";

class CreateUserService {
  constructor (private usersRepository: UsersRepository) {}

  async execute ({ name, email, password, admin = false }: ICreateUser): Promise<User> {
    const userExists = await this.usersRepository.findOne({ email });

    if (userExists) {
      throw new ExceptionError('Esse email já está sendo utilizado');
    }

    const hashPassword = await hash(password, 8);

    const user = this.usersRepository.create({
      name, email, admin, password: hashPassword,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
