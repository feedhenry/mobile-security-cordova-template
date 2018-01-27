import { Component } from '@angular/core';
import { KeycloakService } from '../../services/auth.service';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { AuthPage } from '../auth/auth';

@Component({
  selector: 'page-accessControl',
  templateUrl: 'accessControl.html',
  providers: [KeycloakService]
})
export class AccessControlPage {
  superuserRole: boolean;
  apiAccessRole: boolean;
  mobileUserRole: boolean;

  constructor(public toastCtrl: ToastController, private keycloak: KeycloakService, public navCtrl: NavController) {
    this.keycloak = keycloak;
    this.toastCtrl = toastCtrl;
    this.navCtrl = navCtrl;
  }

  ionViewDidEnter(): void {
    if(this.keycloak.isAuthenticated()) {
    this.keycloak.loadUserProfile().then((userProfile) => {
        this.superuserRole = this.keycloak.hasRealmRole('superuser');
        this.mobileUserRole = this.keycloak.hasRealmRole('mobile-user');
        this.apiAccessRole = this.keycloak.hasRealmRole('api-access');
      })
      .catch((err) => console.error("Error retrieving user profile", err));
    } else {
      let toast = this.toastCtrl.create({
         message: 'Not Authenticated',
         duration: 3000,
         position: 'bottom'
       });

       this.navCtrl.setRoot(AuthPage);
       toast.present();
      }
    }
  }
