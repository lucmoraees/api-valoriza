import { getCustomRepository } from "typeorm";
import Compliment from "../../../database/entities/Compliment";
import ComplimentsRepository from "../../../repositories/ComplimentsRepository";

class ListSendComplimentsService {
  async execute(userId: string): Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)

    const compliments = await complimentsRepository.find({
      where: { user_sender: userId },
      relations: ['userSender', 'userReceiver', 'tag'],
    });
    
    return compliments;
  }
}

export default ListSendComplimentsService;
