import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import { ApiurlService } from './apiurl.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userPayload:any="";
  constructor(private http:HttpClient,private router:Router,private baseapi:ApiurlService) { 
    this.userPayload=this.decodedToken();
  }
  
  // baseserverurl="https://localhost:44301/api/"
  baseserverurl=this.baseapi.getApiBaseUrl();
  loginUser(subs:any):Observable<any>{
    return this.http.post(this.baseserverurl+"User/UserLogin",
    subs,
    {
      responseType:'json'
    });
  }

  signupUser(subs:any):Observable<any>{
    return this.http.post(this.baseserverurl+"User/UserAddUpdate",subs);
  }
  verifyUser(subs:any):Observable<any>{
    return this.http.post(this.baseserverurl+"User/VerifyUser",subs);
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }
  IsLoggedIn():boolean{
    //return !!localStorage.getItem('accessToken');
    const tokenfromlocal=!!localStorage.getItem('accessToken')
    if(tokenfromlocal==true){
      if(this.isTokenExpired()==true){
        this.logout();
        return false
      }
      else{
        return true
      }
    }
    else{
      return false
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }
  getUserType(){
    return localStorage.getItem('userType');
    //console.log(localStorage.getItem('userType'))
  }
  decodedToken(){
    const jwthelper=new JwtHelperService();
    const token=this.getToken()!;// in case it is null we used exclaimation
    //console.log(jwthelper.decodeToken(token))
    return  jwthelper.decodeToken(token);
  }
  getUserIDfromToken(){
    //var UsrID=0;
    const GetDecodedToken=this.decodedToken();
    return GetDecodedToken.UsrID;
  }
  getfullNamefromToken(){
    var Fullname=""
    if(this.userPayload){
      Fullname=this.userPayload.FirstName+' '+this.userPayload.MiddleName+' '+this.userPayload.LastName
    }
    else{
      const GetDecodedToken=this.decodedToken();
      const Fname = GetDecodedToken.FirstName;
      const Mname = GetDecodedToken.MiddleName;
      const Lname = GetDecodedToken.LastName;
      const MakeFullName=Fname+' '+Mname+' '+Lname
      //return this.SetFname=localStorage.getItem('firstName');
      Fullname=MakeFullName
    }
    return Fullname;
    //console.log(this.userPayload.firstName)
  }
  getexpirytimefromToken(){
    if(this.userPayload)
    return this.userPayload.exp;
  }
  isTokenExpired():boolean{
    //debugger
    // const decodedTokenExp = this.getexpirytimefromToken();
    // const currentTime = new Date().getTime() / 1000;
    // return decodedTokenExp < currentTime;
    const GetDecodedToken=this.decodedToken();
    const decodedTokenExp = GetDecodedToken.exp;
    const currentTime = new Date().getTime() / 1000;
    if(currentTime<decodedTokenExp){
      return false;
    }
    else{
      return true;
    }
  }

  emailForVerify:string=""
  SetMessageAfterSignUp(emailid:any){
    //return emailid;
    this.emailForVerify=emailid
  }
  GetMessageAfterSignup(){
    return this.emailForVerify;
  }
  
}
