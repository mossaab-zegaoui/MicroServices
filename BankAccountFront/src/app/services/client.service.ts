import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly apiUrl = 'http://localhost:9999/CLIENT-SERVICE/clients';
  constructor(private http: HttpClient) {}
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}`);
  }
  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }
}
