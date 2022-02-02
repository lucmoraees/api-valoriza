import { Repository } from "typeorm";
import User from "../../database/entities/User";

export type IUsersRepository = Repository<User> & {}

export interface ICreateUserService {
  execute({}: ICreateUser): Promise<User>;
}

export interface IListUsersService {
  execute(): Promise<User[]>;
}

export interface ICreateUser {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}
