import { Request, Response, NextFunction } from 'express';
import ExceptionError from '../errors/ExceptionError';

const EnsureAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const { admin } = req.user;

  if (!admin) {
    throw new ExceptionError('Usuário não autorizado', 401);
  }

  return next();
}

export default EnsureAdmin;
