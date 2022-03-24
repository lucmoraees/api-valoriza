import { Request, Response } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";

class AuthenticateUserController {
  constructor (private authenticateUserService: AuthenticateUserService) {}

  async execute(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const tokenAuth = await this.authenticateUserService.execute({ email, password });

      return res.json({ tokenAuth })
    } catch (error) {
      return res.status(error.code | 400).json(error);
    }
  }
}

export default AuthenticateUserController;
