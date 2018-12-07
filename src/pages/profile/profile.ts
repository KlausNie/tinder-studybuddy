import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  studigoal = "";
  studilevel = 0;
  course = "";
  courses = []
  segments: string = "calendar";

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

    this.courses = ["[WEL123] How to build a successful business", "[LWI342] How to win the prize money", "[NIT332] Extra Cheese"];
  }

  addCourse() {
    console.log("add course");
    let alert = this.alertCtrl.create({
        title: 'Add course',
        inputs: [
          {
            name: 'Course name',
            placeholder: 'Course name'
          },
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
            text: 'Add',
            handler: data => {
              this.courses.push(data.name);
            }
          }
      ]});
      alert.present();
    }
}

