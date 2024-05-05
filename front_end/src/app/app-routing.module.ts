import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from "./components/client/client.component";
import {AccountComponent} from "./components/account/account.component";
import {EditClientComponent} from "./components/client/edit-client/edit-client.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: 'clients', component: ClientComponent},
  {path: 'clients/:id/edit', component: EditClientComponent, canActivate: [AuthGuard], data: {roles: ['USER']}},
  {path: 'accounts', component: AccountComponent, canActivate: [AuthGuard], data: {roles: ['ADMIN']}},
  {path: '**', pathMatch: 'full', redirectTo: 'clients'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
