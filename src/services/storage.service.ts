import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

class Note {
    title: string;
    content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.content;
    }
}

@Injectable()
/**
 * Contains properties of the Storage Service.
 */
export class StorageService {

  KEYSTORE_ALIAS: String = "keystore";

  /**
  * @param alertCtrl The ionic alert controller
  */
  constructor(public alertCtrl: AlertController) {
    this.alertCtrl = alertCtrl;
  }

  getNotes() {
    var notes = this.getFromKeystore()
    return notes
  }

  createNote(title: string, content: string): void {
    let note = new Note(title, content)
    this.saveNote(note)
  }

  saveNote(note: Note) {
  var notes = JSON.parse(this.getFromKeystore())
  notes.add(note)
  this.saveToKeystore(notes)
  }



  saveToKeystore(value: String): void {
      (<any>window).SecureKeyStore.set(function (value) {
    }, function (error) {
      console.log(error);
    }, this.KEYSTORE_ALIAS, value);
  }

  getFromKeystore(): any {
      (<any>window).SecureKeyStore.get(function (result) {
        return result
    }, function (error) {
        return "{}"
    }, this.KEYSTORE_ALIAS);
  }

}
