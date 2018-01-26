import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KeycloakService } from '../../services/auth.service';
declare var require: any
var keycloakConfig = require('../../config/keycloak.json');
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
  providers: [KeycloakService]
})
export class AuthPage {

  authButtonState: boolean;

  constructor(public toastCtrl: ToastController, private keycloak: KeycloakService, public navCtrl: NavController, public navParams: NavParams) {
    this.keycloak = keycloak;
    this.authButtonState = false;
    this.toastCtrl = toastCtrl;
  }

  login() {
      this.keycloak.login()
  }

  pinningSuccess(message) {
    this.authButtonState = true;
  }

  pinningFailure(message) {
    if (message == "CONNECTION_NOT_SECURE") {
      let toast = self.toastCtrl.create({
         message: 'Connection Not Secure. Preventing Authentication.',
         duration: 10000,
         position: 'bottom'
       });

      toast.present();

      this.authButtonState = false;
    }
  }

  ionViewDidEnter(): void {
    var server = keycloakConfig.url;
    var fingerprint = "44 C8 9A 60 4E 29 82 85 8E 4F 75 1F 78 46 CD B3 0A 08 66 3F";
    var self = this;

    window.plugins.sslCertificateChecker.check(
            self.pinningSuccess,
            self.pinningFailure,
            server,
            fingerprint);
  }
}
