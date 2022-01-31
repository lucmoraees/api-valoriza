import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import ExceptionError from '../errors/ExceptionError';
import authConfig from '../configs/auth';

interface ITokenDecoded {
  id: string,
  email: string,
	admin: boolean,
}

const EnsureAuthenticate = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

	if (!authHeader) {
		throw new ExceptionError('Envie o token para fazer a autenticação');
	}

	// Bearer {{token}}
	const [type, token] = authHeader.split(' ');

	if (type !== 'Bearer' || !token) {
		throw new ExceptionError('Token mal formado');
	}

	try {
		const decodedToken = verify(token, authConfig.jwt.secret);

		const { id, email, admin } = decodedToken as ITokenDecoded;

		req.user = { id, email, admin };

		return next();
	} catch (error) {
		throw new ExceptionError('Token inválido');
	}
}

export default EnsureAuthenticate;
