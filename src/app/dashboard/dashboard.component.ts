import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registerClient:any;
  constructor(private documentservice:DocumentService) { }

  ngOnInit() {
    this.getRegisterClients();
  }
  getRegisterClients(){
    this.documentservice.getRegisterClient().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(res => {
      this.registerClient = res;
    },error=>{
      console.log(error);
    });
  }

}
