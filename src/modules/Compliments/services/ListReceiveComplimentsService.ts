import Compliment from "../../../database/entities/Compliment";
import ComplimentsRepository from "../../../repositories/ComplimentsRepository";

class ListReceiveComplimentsService {
  constructor (private complimentsRepository: ComplimentsRepository) {}

  async execute(userId: string): Promise<Compliment[]> {
    const compliments = await this.complimentsRepository.find({
      where: { user_receiver: userId },
      relations: ['userSender', 'userReceiver', 'tag'],
    });
    
    return compliments;
  }
}

export default ListReceiveComplimentsService;
