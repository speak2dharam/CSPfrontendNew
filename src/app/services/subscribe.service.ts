import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiurlService } from './apiurl.service';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http:HttpClient,private baseapi:ApiurlService) { }
  // baseserverurl="https://localhost:44301/api/"
  baseserverurl=this.baseapi.getApiBaseUrl();
  addsubscriber(subs:any){
    return this.http.post(this.baseserverurl+"subscribe/addSubscriber",
    subs,
    {
      responseType:'text'
    });
  }
}
