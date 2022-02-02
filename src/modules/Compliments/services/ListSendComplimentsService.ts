import { getCustomRepository } from "typeorm";
import { IComplimentsRepository } from "../../../@types";
import Compliment from "../../../database/entities/Compliment";
import ComplimentsRepository from "../../../repositories/ComplimentsRepository";

class ListSendComplimentsService {
  constructor(private complimentsRepository: IComplimentsRepository) {}

  async execute(userId: string): Promise<Compliment[]> {
    const compliments = await this.complimentsRepository.find({
      where: { user_sender: userId },
      relations: ['userSender', 'userReceiver', 'tag'],
    });
    
    return compliments;
  }
}

export default ListSendComplimentsService;
