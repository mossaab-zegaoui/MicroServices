import { Client } from './client';

export interface Account {
  id: string;
  accountType: AccountType;
  balance: number;
  clientId: number;
  client?: Client;
}
export enum AccountType {
  SAVING_ACCOUNT = 'SAVING_ACCOUNT',
  CURRENT_ACCOUNT = 'CURRENT_ACCOUNT',
  CHECKING_ACCOUNT = 'CHECKING_ACCOUNT',
}
