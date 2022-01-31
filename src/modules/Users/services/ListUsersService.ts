import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import User from "../../../database/entities/User";
import UsersRepository from "../../../repositories/UsersRepository";

class ListUsersService {
  async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    const usersWhitoutPassword = instanceToPlain(users) as User[];

    return usersWhitoutPassword;
  }
}

export default ListUsersService;
