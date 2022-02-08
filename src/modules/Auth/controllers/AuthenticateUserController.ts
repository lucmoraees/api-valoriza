import { Request, Response } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async execute(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const authenticateUserService = new AuthenticateUserService();

      const tokenAuth = await authenticateUserService.execute({ email, password });

      return res.json({ tokenAuth })
    } catch (error) {
      return res.status(error.code | 400).json(error);
    }
  }
}

export default AuthenticateUserController;
