import { Request, Response } from "express";
import { IAuthenticateUserService } from "../../../@types";

class AuthenticateUserController {
  constructor(private authenticateUserService: IAuthenticateUserService) {}

  async execute(req: Request, res: Response): Promise<Response> {
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
