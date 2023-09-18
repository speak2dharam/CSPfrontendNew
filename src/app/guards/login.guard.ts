import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const getrole=this.auth.getUserType();
      if(this.auth.IsLoggedIn()){
        if(getrole=='Admin'){
          this.router.navigate(['/admin/dashboard']);
        }
        return false;
      }
      else{
        return true;
      }
  }
  
}
