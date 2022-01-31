import { Request, Response } from 'express';
import CreateComplimentService from '../services/CreateComplimentService';

class CreateComplimentController {
  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { tag_id, user_receiver, message } = req.body;
      const user_sender = req.user.id;

      const createComplimentService = new CreateComplimentService();

      const compliment = await createComplimentService.execute({ tag_id, user_sender, user_receiver, message });

      return res.json(compliment);
    } catch (error) {
      return res.status(error.code || 400).json(error);
    }
  } 
}

export default CreateComplimentController;
