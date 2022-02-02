import ListUsersController from "../controllers/ListUsersController"
import UsersRepository from "../../../repositories/UsersRepository"
import ListUsersService from "../services/ListUsersService";

const listUserFactory = () => {
  const usersRepository = new UsersRepository();
  const listUsersService = new ListUsersService(usersRepository);
  const listUsersController = new ListUsersController(listUsersService);
  
  return listUsersController;
}

export default listUserFactory;
