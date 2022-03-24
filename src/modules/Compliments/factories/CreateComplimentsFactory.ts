import { getCustomRepository } from "typeorm";
import ComplimentsRepository from "../../../repositories/ComplimentsRepository";
import UsersRepository from "../../../repositories/UsersRepository";
import CreateComplimentController from "../controllers/CreateComplimentController";
import CreateComplimentService from "../services/CreateComplimentService";

const createComplimentsFactory = () => {
  const complimentsRepository = getCustomRepository(ComplimentsRepository);
  const usersRepository = getCustomRepository(UsersRepository);
  const createComplimentService = new CreateComplimentService(complimentsRepository, usersRepository);
  const createComplimentController = new CreateComplimentController(createComplimentService);

  return createComplimentController;
}

export default createComplimentsFactory;
