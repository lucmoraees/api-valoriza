import { Request, Response } from 'express';
import { IListUsersService } from '../../../@types';

class ListUsersController {
  constructor (private listUsersService: IListUsersService) {}

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
