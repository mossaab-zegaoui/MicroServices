import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {KeycloakProfile} from "keycloak-js";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = this.keyCloakService.isLoggedIn();
  profile: KeycloakProfile | null = null;
  roles: string[] = [];


  constructor(private keyCloakService: KeycloakService) {
  }

  ngOnInit() {
    this.keyCloakService.loadUserProfile().then(profile => this.profile = profile);
    this.roles = this.keyCloakService.getUserRoles();
  }

  hasRole(role: string) {
    return this.roles.includes(role);
  }

  onLogout() {
    this.keyCloakService.logout(
      window.location.origin
    )
  }

  async onLogin() {
    await this.keyCloakService.login({
      redirectUri: window.location.origin
    })
  }

}
