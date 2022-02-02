import { compare } from 'bcryptjs';
import { IAuthenticateUser, IUsersRepository } from '../../../@types';
import ExceptionError from '../../../errors/ExceptionError';
import { createTokenJwt } from '../../../utils';

class AuthenticateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute ({ email, password }: IAuthenticateUser): Promise<string> {
    const user = await this.usersRepository.findOne({ email });

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
