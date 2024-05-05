import {Component, OnInit} from '@angular/core';
import {Client} from "../../model/client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.clients = [
      {id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', createdAt: '2022-01-25'},
      {id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', createdAt: '2022-01-26'},
      {id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-123-4567', createdAt: '2022-01-27'},
      {id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '111-222-3333', createdAt: '2022-01-28'},
      {id: 5, name: 'Charlie White', email: 'charlie@example.com', phone: '999-888-7777', createdAt: '2022-01-29'},
    ];
  }

  editClient(id: number) {
    this.router.navigate([`/clients/${id}/edit`]);
  }

  deleteClient(id: number) {

  }
}
