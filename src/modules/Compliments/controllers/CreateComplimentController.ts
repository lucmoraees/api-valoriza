import { Request, Response } from 'express';
import { ICreateComplimentService } from '../../../@types';

class CreateComplimentController {
  constructor(private createComplimentService: ICreateComplimentService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { tag_id, user_receiver, message } = req.body;
      const user_sender = req.user.id;

      const compliment = await this.createComplimentService.execute({ tag_id, user_sender, user_receiver, message });

      return res.json(compliment);
    } catch (error) {
      return res.status(error.code || 400).json(error);
    }
  } 
}

export default CreateComplimentController;
