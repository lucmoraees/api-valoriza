import { Request, Response } from 'express';
import { ICreateUserService } from '../../../@types';

class CreateUserController {
  constructor (private createUserService: ICreateUserService) {}

  async execute (req: Request, res: Response): Promise<Response> {
    try {
      const { email, name, admin, password } = req.body;

      const user = await this.createUserService.execute({ email, password, name, admin });

      return res.json(user);
    } catch (error) {
      return res.status(error.code | 400).json(error);
    }
  }
}

export default CreateUserController;
