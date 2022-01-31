import { Request, Response } from 'express';
import ListTagsService from '../services/ListTagsService';

class ListTagsController {
  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const listTagsService = new ListTagsService();

      const tags = await listTagsService.execute();

      return res.json(tags);      
    } catch (error) {
      return res.status(error.code || 400).json(error);
    }
  }
}

export default ListTagsController;
