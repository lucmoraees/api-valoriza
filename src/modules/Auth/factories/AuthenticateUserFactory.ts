import { getCustomRepository } from "typeorm";
import UsersRepository from "../../../repositories/UsersRepository";
import AuthenticateUserController from "../controllers/AuthenticateUserController";
import AuthenticateUserService from "../services/AuthenticateUserService";

const authenticateUserFactory = () => {
  const usersRepository = getCustomRepository(UsersRepository);
  const authenticateUserService = new AuthenticateUserService(usersRepository);
  const authenticateUserController = new AuthenticateUserController(authenticateUserService);

  return authenticateUserController;
}

export default authenticateUserFactory;
