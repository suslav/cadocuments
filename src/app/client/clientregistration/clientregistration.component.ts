import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/models/userlogin';
import{FormBuilder, Validators, ControlContainer, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-clientregistration',
  templateUrl: './clientregistration.component.html',
  styleUrls: ['./clientregistration.component.css']
})
export class ClientregistrationComponent implements OnInit {
  public clientRegistration: Clients;
  constructor() { }

  ngOnInit() {
    this.loadClientRegist();
  }
  clientRegister(clientRegistration:Clients,isValid:boolean){
      console.log(clientRegistration)
  }
  loadClientRegist() {
    this.clientRegistration = {
      firstName: '',
      lastName: '',
      gender: '',
      address:'',
      city:'',
      state:'',
      postcode:''
    }
 
  }

}
