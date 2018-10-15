import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService:AuthService) { }

  ngOnInit() {
  }
  tryRegister(values){
    this.authService.doRegister(values).then(res=>{
      console.log(res,'res');
    },error=>{
      console.log(error,'error');
    })
  }

}
