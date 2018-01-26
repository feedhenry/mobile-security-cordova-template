import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
/**
 * Contains properties of the Storage Service.
 */
export class StorageService {
  notes: Array<{title: string, content: string}>;
  KEYSTORE_ALIAS: String = "mobile_store";

  /**
  * @param alertCtrl The ionic alert controller
  */
  constructor(public alertCtrl: AlertController) {
    this.alertCtrl = alertCtrl;
    this.notes = [];
  }

  getNotes() {
    return new Promise((resolve, reject) => {
    cordova.plugins.SecureKeyStore.get(function (result) {
        resolve(JSON.parse(result));
    }, function (error) {
        console.log(error);
        reject(error);
    }, this.KEYSTORE_ALIAS);
    });
  }

  createNote(title: string, content: string): void {
    var keystoreItems = [];
    var newNote = {title: title, content: content};
    var self = this;

    return new Promise((resolve, reject) => {
      cordova.plugins.SecureKeyStore.get(function (result) {
          keystoreItems = JSON.parse(result);
          keystoreItems.push(newNote);
          self.saveToKeystore(keystoreItems).then(() => {
            resolve();
          }).catch((err) => console.error("Error retrieving notes", err));
      }, function (error) {
          self.saveToKeystore(keystoreItems);
          console.log(error);
          resolve()
      }, this.KEYSTORE_ALIAS);
    });
  }

  saveToKeystore(value: string): void {
    return new Promise((resolve, reject) => {
      cordova.plugins.SecureKeyStore.set(function (value) {
        resolve(value);
    }, function (error) {
      console.log(error);
      reject(error);
    }, this.KEYSTORE_ALIAS, JSON.stringify(value));
  });
}
}
