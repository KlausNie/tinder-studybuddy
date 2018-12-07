import {Component} from '@angular/core';

import {MatchingPage} from '../about/matching';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = MatchingPage;
    tab3Root = ContactPage;

    constructor() {

    }
}
