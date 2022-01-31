import { Request, Response } from 'express';
import ListReceiveComplimentsService from '../services/ListReceiveComplimentsService';

class ListReceiveComplimentsController {
  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;

      const listReceiveComplimentsService = new ListReceiveComplimentsService();

      const compliments = await listReceiveComplimentsService.execute(id);
      
      return res.json(compliments);
    } catch (error) {
     return res.status(error.code || 400).json(error); 
    }
  }
}

export default ListReceiveComplimentsController;
