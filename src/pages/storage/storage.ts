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
  notes: any;

  constructor(private storageService: StorageService, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.storageService = storageService
    this.alertCtrl = alertCtrl;
    this.notes = [];
  }

  listNotes() {
    this.storageService.getNotes().then((notes) => {
      this.notes = notes;
    })
    .catch((err) => console.error("Error retrieving notes", err));
  }

  createNote(title: string, content: string) {
    this.storageService.createNote(title, content).then((notes) => {
      this.listNotes();
    });
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
          name: 'content',
          placeholder: 'Content'
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
              this.createNote(data.title, data.content)
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
      subTitle: note.content,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  ionViewDidEnter(): void {
    this.listNotes();
  }

}
