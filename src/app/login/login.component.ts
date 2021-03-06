import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, Validators, FormGroupDirective } from '@angular/forms';

import { Userlogin } from 'src/app/models/userlogin';
import { Router } from '@angular/router';
import { PersistanceService } from '../services/persistance.service';
import { ToastaService, ToastaConfig } from 'ngx-toasta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [PersistanceService]
})


export class LoginComponent implements OnInit {
  public userLogin: Userlogin;
  //  passwordFormControl=new FormControl('',[
  //    Validators.required
  //  ]);
  //   emailFormControl=new FormControl('',[
  //     Validators.required,
  //     Validators.email,
  //   ]);

  constructor(private authService: AuthService,
    private toastaService: ToastaService,
    private toastaConfig: ToastaConfig,
    private router: Router,
    private persistance: PersistanceService) {

    this.toastaConfig.theme = 'material';

  }

  ngOnInit() {
    this.userLogin = {
      email: '',
      password: '',
    }
  }
  save(model: Userlogin, isValid: boolean) {

    this.authService.doRegister(model).then(res => {
      console.log(res.user.uid);
      this.persistance.set('userId', res.user.uid);
      this.router.navigate(['/dashboard'])
    }, error => {
      console.log(error, 'error');
    })

  } tryRegister(values) {
    this.authService.doRegister(values).then(res => {
      console.log(res, 'res');
      this.toastaService.success('success');
      this.router.navigate(['/dashboard'])
    }, error => {
      console.log(error, 'error');
    })
  }


}
