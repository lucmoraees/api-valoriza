export interface IAuthenticateUserService {
  execute({}: IAuthenticateUser): Promise<string>
}

export interface IAuthenticateUser {
  email: string;
  password: string;
}
