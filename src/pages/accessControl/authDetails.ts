import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KeycloakService } from '../../services/auth.service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-authDetails',
  templateUrl: 'authDetails.html',
  providers: [KeycloakService]
})
export class AuthDetailsPage {
  profile: object;

  constructor(public toastCtrl: ToastController, public navParams: NavParams, private keycloak: KeycloakService) {
    this.keycloak = keycloak;
    this.profile = {};
    this.toastCtrl = toastCtrl;
  }

  logout() {
    this.keycloak.logout()
    let toast = this.toastCtrl.create({
       message: 'Logged Out Successfully',
       duration: 3000,
       position: 'bottom'
     });

     toast.present();
  }

  ionViewDidEnter(): void {
    if(this.keycloak.isAuthenticated()) {
    this.keycloak.loadUserProfile().then((userProfile) => {
        var realmRoles = this.keycloak.getRealmRoles();

        this.profile = {
          username: userProfile.username ? userProfile.username : "Unknown Username",
          firstName: userProfile.firstName ? userProfile.firstName : "Unknown First Name",
          lastName: userProfile.lastName ? userProfile.lastName : "Unknown Last Name",
          id: userProfile.id ? userProfile.id : "Unknown User ID",
          email: userProfile.email,
          realmRoles: realmRoles
        };
      })
      .catch((err) => console.error("Error retrieving user profile", err));
    } else {
      let toast = this.toastCtrl.create({
         message: 'Not Authenticated',
         duration: 3000,
         position: 'bottom'
       });

       toast.present();
      }
    }
  }
