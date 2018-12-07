import {Component} from '@angular/core';


import { ChatPage } from '../chat/chat';
import { ProfilePage } from '../profile/profile';
import { MatchingPage } from '../about/matching';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = MatchingPage;
  tab3Root = ChatPage;

    constructor() {

    }
}
