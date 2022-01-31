import { Request, Response } from 'express';
import ListUsersService from '../services/ListUsersService';

class ListUsersController {
  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const listUsersService = new ListUsersService();

      const users = await listUsersService.execute();

      return res.json(users);
    } catch (error) {
      return res.status(error.code || 400).json(error);
    }
  }
}

export default ListUsersController;
