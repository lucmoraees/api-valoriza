import { IComplimentsRepository } from "../../../@types";
import Compliment from "../../../database/entities/Compliment";

class ListReceiveComplimentsService {
  constructor(private complimentsRepository: IComplimentsRepository) {}

  async execute(userId: string): Promise<Compliment[]> {
    const compliments = await this.complimentsRepository.find({
      where: { user_receiver: userId },
      relations: ['userSender', 'userReceiver', 'tag'],
    });
    
    return compliments;
  }
}

export default ListReceiveComplimentsService;
