import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  constructor(private createUserService: CreateUserService) {} 

  async execute (req: Request, res: Response): Promise<Response> {
    try {
      const { email, name, admin, password } = req.body;

      console.log(this.createUserService);

      const user = await this.createUserService.execute({ email, password, name, admin });

      return res.json(user);
    } catch (error) {
      return res.status(error.code | 400).json(error);
    }
  }
}

export default CreateUserController;
