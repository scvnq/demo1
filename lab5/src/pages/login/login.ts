import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../models/user';
//import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Platform } from 'ionic-angular';
import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userI: Observable<firebase.User>;
  user = {} as User;


  constructor(private afAuth: AngularFireAuth,
              public navCtrl: NavController,
              private gplus: GooglePlus,
              private platform: Platform,
              public navParams: NavParams) {
    this.userI = this.afAuth.authState;
  }

  async login(user: User){
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.push('TabsPage');
      }
      
    }
    catch(e){
      console.error(e);
    }
  }


  register(){
    this.navCtrl.push('RegisterPage');
  }

  withGoogle() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
      this.navCtrl.push('TabsPage');
    } else {
      this.webGoogleLogin();

    }
  }

  async nativeGoogleLogin(): Promise<firebase.User> {
    try {

      const gplusUser = await this.gplus.login({
        'webClientId': '350445343701-0it51u4lululks5rv5ivoi2au625s5t5.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'suannai5973@gmail.com'
      })
      this.navCtrl.push('TabsPage');
      return await this.afAuth.auth.signInWithCredential(
          firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      )


    } catch(err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      this.navCtrl.push('TabsPage');
    } catch(err) {
      console.log(err)
    }

  }


}

