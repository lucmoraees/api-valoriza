import { Request, Response } from 'express';
import ListReceiveComplimentsService from '../services/ListReceiveComplimentsService';

class ListReceiveComplimentsController {
  constructor (private listReceiveComplimentsService: ListReceiveComplimentsService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;

      const compliments = await this.listReceiveComplimentsService.execute(id);
      
      return res.json(compliments);
    } catch (error) {
     return res.status(error.code || 400).json(error); 
    }
  }
}

export default ListReceiveComplimentsController;
