import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  async execute (req: Request, res: Response): Promise<Response> {
    try {
      const { email, name, admin, password } = req.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({ email, password, name, admin });

      return res.json(user);
    } catch (error) {
      return res.status(error.code | 400).json(error);
    }
  }
}

export default CreateUserController;
