import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import{FormControl,Validators,FormGroupDirective} from '@angular/forms';
import{ErrorStateMatcher} from '@angular/material/core';
import{Userlogin} from 'src/app/models/userlogin';
import{ToastaService,ToastaConfig} from 'ngx-toasta'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  public userLogin:Userlogin;
//  passwordFormControl=new FormControl('',[
//    Validators.required
//  ]);
//   emailFormControl=new FormControl('',[
//     Validators.required,
//     Validators.email,
//   ]);
 
  constructor( private authService:AuthService,private toastaService:ToastaService,private toastaConfig:ToastaConfig) { 
    
     this.toastaConfig.theme = 'material';
    this.toastaService.success('success');
  }

  ngOnInit() {
    this.userLogin={
      email:'',
      password:'',
    }
  }
  save(model:Userlogin,isValid:boolean)
{
  
  this.authService.doRegister(model).then(res=>{
    console.log(res,'res');
  })
  
}  tryRegister(values){
    this.authService.doRegister(values).then(res=>{
      console.log(res,'res');
    },error=>{
      console.log(error,'error');
    })
  }
  

}
