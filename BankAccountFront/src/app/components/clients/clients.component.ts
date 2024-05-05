import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AppState, DataState } from 'src/app/model/app-state';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
deleteProduct(arg0: any) {
throw new Error('Method not implemented.');
}
editProduct(arg0: any) {
throw new Error('Method not implemented.');
}
  readonly DATASTATE = DataState;
  clients$: Observable<AppState<Client[]>> | null = null;
  constructor(private clientService: ClientService) {}
  ngOnInit(): void {
    this.clients$ = this.clientService.getClients().pipe(
      map((clients: Client[]) => {
        return { state: DataState.LOADED, data: clients };
      }),
      startWith({ state: DataState.LOADING }),
      catchError((err) =>
        of({
          state: DataState.ERROR,
          err: err.message,
        })
      )
    );
  }
}
