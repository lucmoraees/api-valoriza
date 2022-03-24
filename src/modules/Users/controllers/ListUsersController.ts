import { Request, Response } from 'express';
import ListUsersService from '../services/ListUsersService';

class ListUsersController {
  constructor (private listUsersService: ListUsersService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.listUsersService.execute();

      return res.json(users);
    } catch (error) {
      return res.status(error.code || 400).json(error);
    }
  }
}

export default ListUsersController;
