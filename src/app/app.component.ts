import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filetax2';
   constructor(private af:AngularFireDatabase) { 
   let obser= this.af.object('connected').valueChanges();
    obser.subscribe({
      next:val=>console.log(val,'test'),
      error:error=>console.log(error),
      complete:()=>console.log('done')
    })
   }
  ngOnInit() {
  }
}
