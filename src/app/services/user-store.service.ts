import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private fullName$=new BehaviorSubject<string>("");
  private expiryDate$=new BehaviorSubject<string>("");
  constructor() { }

  public getfullNameFromStore(){
    return this.fullName$.asObservable();
  }
  public setfullNameForStore(fullName$:string){
    this.fullName$.next(fullName$);
  }
  public getexpiryDateFromStrore(){
    return this.expiryDate$.asObservable();
  }
  public setexpiryDateForStore(expiryDate$:string){
    this.expiryDate$.next(expiryDate$);
  }
}
