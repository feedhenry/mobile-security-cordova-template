import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-deviceTrust',
  templateUrl: 'deviceTrust.html'
})
export class DeviceTrustPage {

  constructor(public navCtrl: NavController) {

  }

  performChecks() {

  }

  ionViewDidEnter(): void {
    this.performChecks();
  }



}
