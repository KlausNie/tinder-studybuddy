import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, ToastController } from 'ionic-angular';
import { MyApp } from './app.component';

import {MatchingPage} from '../pages/about/matching';

import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarButtonComponent } from '../components/calendarbutton/calendarbutton';

@NgModule({
  declarations: [
    MyApp,
    MatchingPage,
    ChatPage,
    TabsPage,
    ProfilePage,
    CalendarButtonComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MatchingPage,
    ChatPage,
    TabsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToastController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
