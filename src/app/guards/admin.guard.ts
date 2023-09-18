import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){}
  canActivate(route: ActivatedRouteSnapshot):boolean {
    const myrole = route.data['role'];
    const getrole=this.auth.getUserType();
    //console.log(this.auth.IsLoggedIn())
    if(this.auth.IsLoggedIn()){
      if(getrole==myrole){
        return true;
      }else{
        return false;
      }
    }
    else{
      this.router.navigate(['/auth/login'])
      return false;
    }
    
  }
  
}
