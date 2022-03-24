import { getCustomRepository } from "typeorm";
import CreateUserController from "../controllers/CreateUserController";
import CreateUserService from "../services/CreateUserService";
import UsersRepository from "../../../repositories/UsersRepository";

const createUserFactory = () => {
  const usersRepository = getCustomRepository(UsersRepository);
  const createUserService = new CreateUserService(usersRepository);
  const createUserController =  new CreateUserController(createUserService);

  return createUserController;
}

export default createUserFactory;
