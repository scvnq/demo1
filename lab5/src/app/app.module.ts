import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import { LocalNotifications } from '@ionic-native/local-notifications';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

//tabspage 不能在这里有，级别高于homepage那些；
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    
  ],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //LocalNotifications,
  ]
})
export class AppModule {}
