import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUserFullName(){
    var FName=localStorage.getItem('firstName');
    var MName=localStorage.getItem('middleName');
    var LName=localStorage.getItem('lastName');
    //var FullName=FName+MName+LName;
    return localStorage.getItem('userType');
    //console.log(localStorage.getItem('userType'))
  }
}
