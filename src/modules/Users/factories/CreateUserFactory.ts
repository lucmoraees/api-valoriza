import CreateUserController from "../controllers/CreateUserController";
import CreateUserService from "../services/CreateUserService";
import UsersRepository from "../../../repositories/UsersRepository";

const createUserFactory = () => {
  const usersRepository = new UsersRepository();
  const createUserService = new CreateUserService(usersRepository);
  const createUserController =  new CreateUserController(createUserService);

  return createUserController;
}

export default createUserFactory;
