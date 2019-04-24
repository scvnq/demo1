import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../css/bootstrap.css',
    '../css/style.css']
})
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;
  alert = '';
  constructor(private firebaseauth: AngularFireAuth,
              private router: Router) { }
  loginEvent(value: any) {
    this.email = value.email.toString();
    this.password = value.password.toString();
    console.log(this.email);
    console.log(this.password);

    if (this.email !== '' && this.password !== '') {
      try {
        this.firebaseauth.auth.signInWithEmailAndPassword(this.email, this.password).then(() => {
          console.log('logged in!');
          this.router.navigateByUrl('/model');
        }).catch(() => {
          this.alert = 'Try again. Invalid Credentials';
        });
      } catch (e) {
        console.error(e);
      }
    }

  }

  ngOnInit() {
  }

}
