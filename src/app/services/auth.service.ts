import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>
  constructor(private router: Router, private afAuth: AngularFireAuth

  ) {
    this.user$=this.afAuth.authState;

  }
  login(){
this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
.then(_=>this.router.navigate(['/dashboard']))
.catch(error=>console.log(error,'error'));
  }
  logout(){
this.afAuth.auth.signOut();
this.router.navigate(['/home']);
  }
  doRegister(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(res => {
       resolve(res);
     }, err => reject(err))
   })
 }
}
