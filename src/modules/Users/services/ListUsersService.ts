import { instanceToPlain } from "class-transformer";
import { IUsersRepository } from "../../../@types";
import User from "../../../database/entities/User";

class ListUsersService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.find();

    const usersWhitoutPassword = instanceToPlain(users) as User[];

    return usersWhitoutPassword;
  }
}

export default ListUsersService;
