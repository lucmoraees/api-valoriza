import ComplimentsRepository from "../../../repositories/ComplimentsRepository";
import UsersRepository from "../../../repositories/UsersRepository";
import ListSendComplimentsController from "../controllers/ListSendComplimentsController";
import ListSendComplimentsService from "../services/ListSendComplimentsService";

const listSendComplimentssFactory = () => {
  const complimentsRepository = new ComplimentsRepository();
  const listSendComplimentsService = new ListSendComplimentsService(complimentsRepository);
  const listSendComplimentsController = new ListSendComplimentsController(listSendComplimentsService);

  return listSendComplimentsController;
}

export default listSendComplimentssFactory;
