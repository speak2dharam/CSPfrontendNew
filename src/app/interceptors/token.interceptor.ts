import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken=this.auth.getToken();
    
    if(myToken){
      //const expirationTime = this.auth.getexpirytimefromToken();
      const GetDecodedToken=this.auth.decodedToken();
      const expirationTime = GetDecodedToken.exp;

      const currentTime = new Date().getTime() / 1000;
      if(currentTime<expirationTime){
        request=request.clone({
          setHeaders:{Authorization:`Bearer ${myToken}`}
        })
      }
      else{
        this.auth.logout();
        this.router.navigate(['/auth/login']);
      }
      
    }
    return next.handle(request).pipe(
      catchError((err:any)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status==401){
            this.router.navigate(['/auth/login'])
            this.auth.logout();
          }
        }
        return throwError(()=> new Error('Some error occured'))
      })
    );
  }
}
