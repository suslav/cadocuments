import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireObject } from 'angularfire2/database';
import{Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
document$:AngularFireObject<any[]>
  constructor(private db:AngularFireDatabase) {
    this.document$=this.db.object('connected')

    //   let obser= this.af.object('connected').valueChanges();
    // obser.subscribe({
    //   next:val=>console.log(val,'test'),
    //   error:error=>console.log(error),
    //   complete:()=>console.log('done')
    // })
   }
}
