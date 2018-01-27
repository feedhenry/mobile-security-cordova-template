import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { AuthDetailsPage } from '../pages/authDetails/authDetails';
import { StoragePage } from '../pages/storage/storage';
import { AccessControlPage } from '../pages/accessControl/accessControl';
import { DeviceTrustPage } from '../pages/deviceTrust/deviceTrust';
import { NetworkPage } from '../pages/network/network';

declare let cordova: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Authentication', component: AuthPage, icon: 'lock'},
      { title: 'User Identity', component: AuthDetailsPage, icon: 'contact' },
      { title: 'Access Control', component: AccessControlPage, icon: 'key'},
      { title: 'Secure Storage', component: StoragePage, icon: 'document' },
      { title: 'Network', component: NetworkPage, icon: 'wifi' },
      { title: 'Device Trust', component: DeviceTrustPage, icon: 'phone-portrait' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      window.open = cordova.InAppBrowser.open;

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
