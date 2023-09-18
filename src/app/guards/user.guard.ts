import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
      if(this.auth.IsLoggedIn()==true){
        const myrole = route.data['role'];
        const getrole=this.auth.getUserType();
        if(getrole==null||getrole=='Customer'){
          return true;
        }
        else{
          if(getrole=='Admin'){
            this.router.navigate(['/admin/dashboard'])
          }
          return false;
        }
      }
      else{
        return false;
      }
  }
  
}
