import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KeycloakService } from '../../services/auth.service';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
  providers: [KeycloakService]
})
export class AuthPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(private keycloak: KeycloakService, public navCtrl: NavController, public navParams: NavParams) {
    this.keycloak = keycloak;
  }

  login() {
      this.keycloak.login()
  }
}
