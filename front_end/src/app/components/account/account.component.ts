import { Component } from '@angular/core';
import {Account, AccountType} from "../../model/account";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accounts: Account[] = [
    { id: '1', type: AccountType.SAVING_ACCOUNT, balance: 1000, clientId: 1 },
    { id: '2', type: AccountType.CURRENT_ACCOUNT, balance: 2500, clientId: 2 },
    { id: '3', type: AccountType.SAVING_ACCOUNT, balance: 500, clientId: 3 },
    { id: '4', type: AccountType.CURRENT_ACCOUNT, balance: 3000, clientId: 4 },
    { id: '5', type: AccountType.SAVING_ACCOUNT, balance: 1500, clientId: 5 },
    { id: '6', type: AccountType.CURRENT_ACCOUNT, balance: 2000, clientId: 1 },
  ];

  cancelAccount(id: string) {


  }

  editAccount(id: string) {

  }
}
