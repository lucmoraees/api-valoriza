import { Repository } from "typeorm";
import Compliment from "../../database/entities/Compliment";

export type IComplimentsRepository = Repository<Compliment> & {};

export interface ICreateComplimentService {
  execute(x: ICreateCompliment): Promise<Compliment>;
}

export interface IListReceiveComplimentsService {
  execute(id: string): Promise<Compliment[]>;
}

export interface IListSendComplimentsService {
  execute(id: string): Promise<Compliment[]>;
}

export interface ICreateCompliment {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}
