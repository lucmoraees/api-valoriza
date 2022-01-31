import { Request, Response } from 'express';
import ListSendComplimentsService from '../services/ListSendComplimentsService';

class ListSendComplimentsController {
  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;

      const listSendComplimentsService = new ListSendComplimentsService();

      const compliments = await listSendComplimentsService.execute(id);
      
      return res.json(compliments);
    } catch (error) {
     return res.status(error.code || 400).json(error); 
    }
  }
}

export default ListSendComplimentsController;
