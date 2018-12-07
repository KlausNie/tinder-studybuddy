import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

    constructor(private toast: ToastController) {
    }

    const data = [
        {
            n: "Christian",
            d: "I want to become a successful entrepreneur and achieve a 1.0. in the exam",
            time: new Array(4),
            exp: new Array(10)
        },
        {
            n: "Christian",
            d: "I want to become a successful entrepreneur and achieve a 1.0. in the exam",
            time: new Array(7),
            exp: new Array(2)
        }
    ];

  constructor(public navCtrl: NavController) {
  }

  click(d) {
      this.toast.create({message:`StudyBrudi ${d.n} contacted`}).present()
  }
}
