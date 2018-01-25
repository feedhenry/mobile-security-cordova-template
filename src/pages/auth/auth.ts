import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KeycloakService } from '../../services/auth.service';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
  providers: [KeycloakService]
})
export class AuthPage {

  constructor(private keycloak: KeycloakService, public navCtrl: NavController, public navParams: NavParams) {
    this.keycloak = keycloak;
  }

  login() {
      this.keycloak.login()
  }
}
