import { Request, Response } from 'express';
import CreateTagService from '../services/CreateTagService';

class CreateTagController {
  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;

      const createTagService = new CreateTagService();

      const tag = await createTagService.execute({ name });

      return res.json(tag);
    } catch (error) {
      return res.status(error.code | 400).json(error);
    }
  }
}

export default CreateTagController;
