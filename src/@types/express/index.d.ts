interface IUserRequest {
  id: string;
  email: string;
  admin: boolean;
}

declare namespace Express {
  export interface Request {
    user: IUserRequest;
  }
}