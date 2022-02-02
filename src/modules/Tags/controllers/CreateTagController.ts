import { Request, Response } from 'express';
import { ICreateTagService } from '../../../@types';

class CreateTagController {
  constructor(private createTagService: ICreateTagService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;

      const tag = await this.createTagService.execute({ name });

      return res.json(tag);
    } catch (error) {
      return res.status(error.code | 400).json(error);
    }
  }
}

export default CreateTagController;
