import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-authDetails',
  templateUrl: 'authDetails.html'
})
export class AuthDetailsPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event, item) {

  }
}
