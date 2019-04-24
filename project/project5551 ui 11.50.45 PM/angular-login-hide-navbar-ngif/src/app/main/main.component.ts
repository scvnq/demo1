import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [
    '../css/bootstrap.css',
    '../css/style.css']
})
export class MainComponent implements OnInit {
  private email: string;
  private password: string;
  alert = '';

  constructor(private firebaseauth: AngularFireAuth) { }

  ngOnInit() {
  }

  registerEvent(value: any) {
    this.email = value.email.toString();
    this.password = value.password.toString();
    console.log(this.email);
    console.log(this.password);

    try {
      this.firebaseauth.auth.createUserWithEmailAndPassword(this.email, this.password).then(() => {
        console.log('successful!');
      }).catch(() => {
        this.alert = 'Invalid email/password should be of 6 characters';
      });
    } catch (e) {
      console.error(e);
    }

  }

}
