import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { KeycloakService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public keycloakService: KeycloakService, public toastCtrl: ToastController) {
    this.keycloakService = keycloakService;
    this.toastCtrl = toastCtrl;
  }

  checkIfAuthenticated() {
  if(this.keycloakService.isAuthenticated()) {
    let toast = this.toastCtrl.create({
       message: 'Authenticated Successfully',
       duration: 3000,
       position: 'bottom'
     });

     toast.present();
    }
  }

  ionViewDidEnter(): void {
    this.checkIfAuthenticated();
  }



}
