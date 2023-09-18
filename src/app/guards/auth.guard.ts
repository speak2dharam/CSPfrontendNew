import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){}
  canActivate(route: ActivatedRouteSnapshot):boolean {
    //const role = route.data.role; // Getting role value which we passed to data object in router configuration
    const myrole = route.data['role'];
    //const myrole = route.params['role'] as string;
    
    if(this.auth.IsLoggedIn()){
      const getrole=this.auth.getUserType();
      if(getrole==myrole)
      {
        return true;
      }
      else if(getrole=='Admin'){
        this.router.navigate(['/admin/dashboard'])
        return false;
      }
      else{
        this.router.navigate([''])
        return false;
      }
    }
    else{
      if(myrole=='Admin'){
        this.router.navigate([''])
        return false;
      }
      else{
        //this.router.navigate([''])
        return true;
      }
    }
    
  }
  
}
