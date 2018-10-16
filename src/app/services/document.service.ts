import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireObject } from 'angularfire2/database';
import{Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  user$: Observable<firebase.User>
  itemsRef:any;
document$:AngularFireObject<any[]>
  constructor(private afAuth: AngularFireAuth,private db: AngularFireDatabase) {
    this.document$=this.db.object('connected')
    this.user$ = this.afAuth.authState;
    this.itemsRef = db.list('clients');
    
    //   let obser= this.af.object('connected').valueChanges();
    // obser.subscribe({
    //   next:val=>console.log(val,'test'),
    //   error:error=>console.log(error),
    //   complete:()=>console.log('done')
    // })
   }
   clientRegister(data){
    return new Promise<any>((resolve, reject) => {
    this.itemsRef.push({ site: data });
  })}
}
