import { Injectable } from '@angular/core';
import { ApiurlService } from './apiurl.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(
    private baseapi:ApiurlService,
    private http:HttpClient
  ) { }
  baseserverurl=this.baseapi.getApiBaseUrl();
  getAddressByUserIDApi(userID: number) {
    const apiUrl = this.baseserverurl+`adress/getAddress?UserID=${userID}`;
    return this.http.get(apiUrl);
  }
  getStatelist() {
    const apiUrl = this.baseserverurl+`adress/getStates`;
    return this.http.get(apiUrl);
  }
  getCitylist(StateID: number) {
    const apiUrl = this.baseserverurl+`adress/getCity?StateID=${StateID}`;
    return this.http.get(apiUrl);
  }
  manageAddress(adrss:any){
    return this.http.post(this.baseserverurl+"adress/manageAddress",adrss);
  }
}
