import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

import { ChatPage } from '../chat/chat';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = AboutPage;
  tab3Root = ChatPage;

  constructor() {

  }
}
