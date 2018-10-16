import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>
  constructor(private afAuth: AngularFireAuth

  ) {
    this.user$ = this.afAuth.authState;

  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

      .catch(error => console.log(error, 'error'));
  }

  logout() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signOut();
    })
  

  }
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }
}
