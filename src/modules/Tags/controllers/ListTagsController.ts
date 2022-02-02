import { Request, Response } from 'express';
import { IListTagsService } from '../../../@types';

class ListTagsController {
  constructor(private listTagsService: IListTagsService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const tags = await this.listTagsService.execute();

      return res.json(tags);      
    } catch (error) {
      return res.status(error.code || 400).json(error);
    }
  }
}

export default ListTagsController;
