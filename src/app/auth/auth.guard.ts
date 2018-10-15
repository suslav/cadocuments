import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private routr:Router,private authservice:AuthService){

  }
  canActivate():Observable<boolean>{
    return this.authservice.user$.map(user=>{
      if(user){
        return true;

      }else{
        this.routr.navigate(['/login']);
        return false;

      }
    })
  }
  canActivate1(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
