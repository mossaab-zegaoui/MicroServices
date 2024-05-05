import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Account } from 'src/app/model/account';
import { AppState, DataState } from 'src/app/model/app-state';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  readonly DATASTATE = DataState;
  accounts$: Observable<AppState<Account[]>> | null = null;
  constructor(private accountService: AccountService) {}
  ngOnInit(): void {
    this.accounts$ = this.accountService.getAllAccounts().pipe(
      map((accounts: Account[]) => {
        return { state: DataState.LOADED, data: accounts };
      }),
      startWith({ state: DataState.LOADING }),
      catchError((err) =>
        of({
          state: DataState.ERROR,
          err,
        })
      )
    );
  }
  deleteAccount(id: string) {
    throw new Error('Method not implemented.');
  }
  editAccount(id: string) {
    throw new Error('Method not implemented.');
  }
}
