import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/models/userlogin';
import { AuthService } from '../../services/auth.service';
import{FormBuilder, Validators, ControlContainer, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-clientregistration',
  templateUrl: './clientregistration.component.html',
  styleUrls: ['./clientregistration.component.css']
})
export class ClientregistrationComponent implements OnInit {
  public clientRegistration: Clients;
  constructor(private authservice:AuthService) { }

  ngOnInit() {
    this.loadClientRegist();
  }
  clientRegister(clientRegistration:Clients,isValid:boolean){
      this.authservice.clientRegister(clientRegistration).then(res=>{
        console.log(res);
      },error=>{
        console.log(error)
      })
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
