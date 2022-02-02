import ComplimentsRepository from "../../../repositories/ComplimentsRepository";
import UsersRepository from "../../../repositories/UsersRepository";
import ListReceiveComplimentsController from "../controllers/ListReceiveComplimentsController";
import ListReceiveComplimentsService from "../services/ListReceiveComplimentsService";

const listReceiveComplimentssFactory = () => {
  const complimentsRepository = new ComplimentsRepository();
  const listReceiveComplimentsService = new ListReceiveComplimentsService(complimentsRepository);
  const listReceiveComplimentsController = new ListReceiveComplimentsController(listReceiveComplimentsService);

  return listReceiveComplimentsController;
}

export default listReceiveComplimentssFactory;
