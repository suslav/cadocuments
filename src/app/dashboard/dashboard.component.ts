import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import * as _ from 'underscore';
import { element } from 'protractor';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registerClient:any;
  columnDefs:any;
  rowData:any=[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private documentservice:DocumentService) {
    this.columnDefs = [
      {headerName: 'Client Name', field: 'firstName'},
      
  ];
  let myId = _.rest([5, 4, 3, 2, 1]);
  console.log(myId);
 
   }

  ngOnInit():void{    
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5
      };
    this.getRegisterClients();
  }
  getRegisterClients(){
    this.documentservice.getRegisterClient().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(res => {
      this.registerClient = res;
      // let clients=_.pluck(this.registerClient, 'clientInfo')
      // clients.forEach(element=>{
      //   this.rowData.push({firstName:element.firstName})
      // })
      // console.log(this.rowData);
  },error=>{
    console.log(error);
  })}

}
