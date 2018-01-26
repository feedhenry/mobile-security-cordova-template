import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KeycloakService } from '../../services/auth.service';
declare var require: any
var keycloakConfig = require('../../config/keycloak.json');
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
declare let window: any;

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
  providers: [KeycloakService]
})
export class AuthPage {
  authButtonState: boolean;

  constructor(public toastCtrl: ToastController, private keycloak: KeycloakService, public navCtrl: NavController, public navParams: NavParams) {
    this.keycloak = keycloak;
    this.authButtonState = true;
    this.toastCtrl = toastCtrl;
    this.navCtrl = navCtrl;
  }

  login() {
      this.keycloak.login()
  }

  ionViewDidEnter(): void {
    var server = keycloakConfig.url;
    var fingerprint = keycloakConfig.pinningFingerprint;

    window.plugins.sslCertificateChecker.check(
            function() {
                // success
            }.bind(this),
            function(message) {
              if (message == "CONNECTION_NOT_SECURE") {
                let toast = this.toastCtrl.create({
                   message: 'Connection Not Secure. Preventing Authentication.',
                   duration: 10000,
                   position: 'bottom'
                 });

                this.navCtrl.setRoot(HomePage);
                toast.present();
              }
            }.bind(this),
            server,
            fingerprint);
  }
}
