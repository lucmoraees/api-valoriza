import { Request, Response } from 'express';
import { IListSendComplimentsService } from '../../../@types';

class ListSendComplimentsController {
  constructor(private listSendComplimentsService: IListSendComplimentsService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;

      const compliments = await this.listSendComplimentsService.execute(id);
      
      return res.json(compliments);
    } catch (error) {
     return res.status(error.code || 400).json(error); 
    }
  }
}

export default ListSendComplimentsController;
