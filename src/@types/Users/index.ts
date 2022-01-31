export interface ICreateUser {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export interface IAuthenticateUser {
  email: string;
  password: string;
}
