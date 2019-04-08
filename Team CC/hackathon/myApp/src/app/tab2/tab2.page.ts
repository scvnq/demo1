import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
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
