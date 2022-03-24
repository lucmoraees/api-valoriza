import { instanceToPlain } from "class-transformer";
import User from "../../../database/entities/User";
import UsersRepository from "../../../repositories/UsersRepository";

class ListUsersService {
  constructor (private usersRepository: UsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.find();

    const usersWhitoutPassword = instanceToPlain(users) as User[];

    return usersWhitoutPassword;
  }
}

export default ListUsersService;
