import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ModelPageComponent } from './model-page/model-page.component';
import { LoginComponent } from './login/login.component';
import { ModelPage1Component } from './model-page-1/model-page-1.component';
import { ModelPage2Component } from './model-page-2/model-page-2.component';
import { ModelPage3Component } from './model-page-3/model-page-3.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';

const firebaseConfig = {
  apiKey: 'AIzaSyCsDkYE3JaFLz0UOB3mOkua-MbNilY9Jx4',
  authDomain: 'modelkb-db.firebaseapp.com',
  databaseURL: 'https://modelkb-db.firebaseio.com',
  projectId: 'modelkb-db',
  storageBucket: 'modelkb-db.appspot.com',
  messagingSenderId: '67869158599'
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ModelPageComponent,
    LoginComponent,
    ModelPage1Component,
    ModelPage2Component,
    ModelPage3Component,
    NavBarComponent,
    FooterBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: MainComponent
      },
      {
        path: 'model',
        component: ModelPageComponent,
      },
      {
        path: 'model1',
        component: ModelPage1Component,
      },
      {
        path: 'model2',
        component: ModelPage2Component,
      },
      {
        path: 'model3',
        component: ModelPage3Component,
      }
    ]),
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
