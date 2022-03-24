import { getCustomRepository } from "typeorm";
import ComplimentsRepository from "../../../repositories/ComplimentsRepository";
import ListSendComplimentsController from "../controllers/ListSendComplimentsController";
import ListSendComplimentsService from "../services/ListSendComplimentsService";

const listSendComplimentssFactory = () => {
  const complimentsRepository = getCustomRepository(ComplimentsRepository);
  const listSendComplimentsService = new ListSendComplimentsService(complimentsRepository);
  const listSendComplimentsController = new ListSendComplimentsController(listSendComplimentsService);

  return listSendComplimentsController;
}

export default listSendComplimentssFactory;
