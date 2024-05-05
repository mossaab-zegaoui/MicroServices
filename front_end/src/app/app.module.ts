import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { ClientComponent } from './components/client/client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { EditClientComponent } from './components/client/edit-client/edit-client.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService) {
  const url = process.env['KEYCLOAK_URL'] || 'http://localhost:8080';
  const realm = process.env['KEYCLOAK_REALM'] || 'account_realm';
  const clientId = process.env['KEYCLOAK_CLIENT_ID'] || 'AccountClient';
  return () =>
    keycloak.init({
      config: {
        url,
        realm,
        clientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NavbarComponent,
    ClientComponent,
    EditClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  exports: [NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
