import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { IAuthenticateUser } from '../../../@types';
import ExceptionError from '../../../errors/ExceptionError';
import UsersRepository from '../../../repositories/UsersRepository';
import { createTokenJwt } from '../../../utils';

class AuthenticateUserService {
  async execute ({ email, password }: IAuthenticateUser) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new ExceptionError("Combinação email/senha incorreta");
    }

    const passwordIsValid = await compare(password, user.password);

    if (!passwordIsValid) {
      throw new ExceptionError("Combinação email/senha incorreta");
    }

    const tokenAuth = createTokenJwt({ id: user.id, email, name: user.name, admin: user.admin });

    return tokenAuth;
  }
}

export default AuthenticateUserService;
