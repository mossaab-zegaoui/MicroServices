import {Client} from "./client";

export enum AccountType {
  SAVING_ACCOUNT = 'SAVING_ACCOUNT',
  CURRENT_ACCOUNT = 'CURRENT_ACCOUNT'
}

export interface Account {
  id: string;
  type: AccountType;
  balance:number;
  clientId?: number;
  client?: Client

}
