import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-matching',
    templateUrl: 'matching.html'
})
export class MatchingPage {

    subject: string = "Entrepreneurship";

    constructor(public navCtrl: NavController) {

    }

}
