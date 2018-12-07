import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

    private data = [
        {
            n: "Christian",
            d: "I want to become a successful entrepreneur and achieve a 1.0. in the exam",
            time: new Array(1),
            exp: new Array(4)
        },
        {
            n: "Till",
            d: "I'm especially interested in exercise 5. I just cannot understand it and hope you can explain it to me ;)",
            time: new Array(2),
            exp: new Array(5)
        },
        {
            n: "Maurice & Simon",
            d: "We figured out the last exercise (10) of the last assignment and can share our findings!",
            time: new Array(6),
            exp: new Array(2)
        }
    ];
    private subject = "Entrepreneurship";
    private values = [];

    constructor(private toast: ToastController) {
    }


  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
      this.changeCourse(this.subject);
  }

  click(d) {
      this.toast.create({message:`StudyBrudi ${d.n} contacted`}).present()
  }

  changeCourse(e) {
      switch(e) {
          case "Entrepreneurship":
              this.values = [this.data[0]];
              break;
          case "Machine Learning":
              this.values = [this.data[1]]
              break;
          case "Economy":
              this.values = this.data.slice(1,3)
              break;
      }
  }
}
