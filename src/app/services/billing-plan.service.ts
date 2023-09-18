import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiurlService } from './apiurl.service';

@Injectable({
  providedIn: 'root'
})
export class BillingPlanService {

  constructor(private http:HttpClient,private baseapi:ApiurlService) { }
  baseserverurl=this.baseapi.getApiBaseUrl();

  getBillingPlanType(){
    return this.http.get(this.baseserverurl+"billingPlan/getBillingPlanType");
  }
}
