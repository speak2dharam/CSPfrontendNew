import { Injectable } from '@angular/core';
import { ApiurlService } from './apiurl.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  OrderType:number=0;
  constructor(private http:HttpClient,private baseapi:ApiurlService) { }

  baseserverurl=this.baseapi.getApiBaseUrl();

  getOrderItems(OrderID: number) {
    const apiUrl = this.baseserverurl+`order/getOrderItems?OrderID=${OrderID}`;
    return this.http.get(apiUrl);
  }
  getOrderPricing(OrderID: number) {
    const apiUrl = this.baseserverurl+`order/getOrderPricing?OrderID=${OrderID}`;
    return this.http.get(apiUrl);
  }
  placeOrder(prd:any){
    return this.http.post(this.baseserverurl+"order/placeOrder",prd);
  }
  updateOrderItems(prd:any){
    return this.http.post(this.baseserverurl+"order/updateOrderItem",prd);
  }
  removeOrderItem(prd:any){
    return this.http.post(this.baseserverurl+"order/removeOrderItem",prd);
  }
  checkoutOrder(corder:any){
    return this.http.post(this.baseserverurl+"order/checkoutOrder",corder);
  }
  getOrderType(){
    return this.OrderType;
  }
  setOrderType(getOrderType:number){
    this.OrderType=getOrderType;
  }

}
