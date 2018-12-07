import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-matching',
    templateUrl: 'matching.html'
})
export class MatchingPage {

    subject: string = "Entrepreneurship";

    i: number = 0;

    data = [
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

    constructor(public navCtrl: NavController) {

    }

    click() {
        this.i = (this.i + 1) % 3;
    }

}
