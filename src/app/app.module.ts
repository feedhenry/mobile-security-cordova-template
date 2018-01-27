import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { AuthDetailsPage } from '../pages/authDetails/authDetails';
import { StoragePage } from '../pages/storage/storage';
import { AccessControlPage } from '../pages/accessControl/accessControl';
import { DeviceTrustPage } from '../pages/deviceTrust/deviceTrust';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
import { NetworkPage } from '../pages/network/network';


import { KeycloakService } from '../services/auth.service';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthPage,
    AuthDetailsPage,
    StoragePage,
    AccessControlPage,
    DeviceTrustPage,
    NetworkPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthPage,
    AuthDetailsPage,
    StoragePage,
    AccessControlPage,
    DeviceTrustPage,
    NetworkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    KeycloakService,
    SecureStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
