import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiurlService } from './apiurl.service';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient,private baseapi:ApiurlService) { }
  // baseserverurl="https://localhost:44301/api/"
  baseserverurl=this.baseapi.getApiBaseUrl();
  addEnquiry(enq:any){
    return this.http.post(this.baseserverurl+"enquiry/addLead",
    enq,
    {
      responseType:'text'
    });
  }
  getEnquiry(enq:any){
    return this.http.post(this.baseserverurl+"enquiry/GetAllEnq",enq);
  }
  getSingleEnquiry(SingleEnq:any){
    return this.http.post(this.baseserverurl+"enquiry/getEnquiry",SingleEnq);
  }

}
