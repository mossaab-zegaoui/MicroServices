import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  {
    path: 'accounts',
    component: AccountsComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN'],
    },
  },
  { path: '', pathMatch: 'full', redirectTo: 'clients' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
