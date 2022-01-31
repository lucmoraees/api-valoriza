import { getCustomRepository } from "typeorm";
import Compliment from "../../../database/entities/Compliment";
import ComplimentsRepository from "../../../repositories/ComplimentsRepository";

class ListReceiveComplimentsService {
  async execute(userId: string): Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.find({
      where: { user_receiver: userId },
      relations: ['userSender', 'userReceiver', 'tag'],
    });
    
    return compliments;
  }
}

export default ListReceiveComplimentsService;
