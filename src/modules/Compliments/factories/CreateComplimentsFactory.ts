import ComplimentsRepository from "../../../repositories/ComplimentsRepository";
import UsersRepository from "../../../repositories/UsersRepository";
import CreateComplimentController from "../controllers/CreateComplimentController";
import CreateComplimentService from "../services/CreateComplimentService";

const createComplimentsFactory = () => {
  const complimentsRepository = new ComplimentsRepository();
  const usersRepository = new UsersRepository();
  const createComplimentService = new CreateComplimentService(complimentsRepository, usersRepository);
  const createComplimentController = new CreateComplimentController(createComplimentService);

  return createComplimentController;
}

export default createComplimentsFactory;
