import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
  providers: [StorageService]
})
export class StoragePage {
  notes: Array<{title: string, description: string}>;

  constructor(private storageService: StorageService, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.storageService = storageService
    this.alertCtrl = alertCtrl;
    this.notes = []
  }

  listNotes() {
    this.notes = this.storageService.getNotes()
  }

  createNote(title: string, content: string) {
    this.storageService.createNote(title, content)
  }

  showCreateModal() {
    let alert = this.alertCtrl.create({
      title: 'Create Secure Note',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'description',
          placeholder: 'Description'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Create',
          handler: data => {
            if (data.title) {
              this.createNote(data.title, data.description)
            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

  readNote(note: any) {
  let alert = this.alertCtrl.create({
      title: note.title,
      subTitle: note.description,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  ionViewDidEnter(): void {
    this.listNotes();
  }

}
