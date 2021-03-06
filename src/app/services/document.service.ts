import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { PersistanceService } from 'src/app/services/persistance.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  user$: Observable<firebase.User>
  itemsRef: any;
  uid: string;
  document$: AngularFireObject<any[]>
  constructor(private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private persistance: PersistanceService) {
    this.uid = this.persistance.get('userId');
    this.itemsRef = this.db.list('admin');
    // this.document$=this.db.object('connected')
    // this.user$ = this.afAuth.authState;


    //   let obser= this.af.object('connected').valueChanges();
    // obser.subscribe({
    //   next:val=>console.log(val,'test'),
    //   error:error=>console.log(error),
    //   complete:()=>console.log('done')
    // })
  }
  clientRegister(data) {
    return new Promise<any>((resolve, reject) => {
      this.itemsRef.push({ clientInfo: data });
    })
  }
  getRegisterClient() {
    return this.itemsRef;
    // return new Promise<any>((resolve, reject) => {
      
    //   this.itemsRef.get(this.uid);
    //   return this.db.object(this.uid).valueChanges().subscribe(items => {
    //     console.log(items);
    //   });
    // })
  }
}
