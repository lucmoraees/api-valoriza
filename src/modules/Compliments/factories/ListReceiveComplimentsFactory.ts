import { getCustomRepository } from "typeorm";
import ComplimentsRepository from "../../../repositories/ComplimentsRepository";
import ListReceiveComplimentsController from "../controllers/ListReceiveComplimentsController";
import ListReceiveComplimentsService from "../services/ListReceiveComplimentsService";

const 
listReceiveComplimentssFactory = () => {
  const complimentsRepository = getCustomRepository(ComplimentsRepository);
  const listReceiveComplimentsService = new ListReceiveComplimentsService(complimentsRepository);
  const listReceiveComplimentsController = new ListReceiveComplimentsController(listReceiveComplimentsService);

  return listReceiveComplimentsController;
}

export default listReceiveComplimentssFactory;
