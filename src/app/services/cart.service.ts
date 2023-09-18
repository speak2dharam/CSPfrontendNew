import { Injectable } from '@angular/core';
import { ApiurlService } from './apiurl.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  public GetcartItems:any=[];

  constructor(
    private http:HttpClient,
    private baseapi:ApiurlService,
    private authSrv:AuthService
  ) { }
  baseserverurl=this.baseapi.getApiBaseUrl();

  addToCartlist(GetItemID:any):void{
    //console.log("Before Add Length "+this.wishlistItems)
    this.cartItems.push(GetItemID);
    //console.log("After Add Length "+this.wishlistItems)
    this.updateCartlistCount();
    
  }
  getCartCount(): Observable<number> {
    this.GetCartCountBackend();
    console.log("Observable"+this.cartCountSubject.asObservable())
    return this.cartCountSubject.asObservable();
    
  }

  private updateCartlistCount(): void {
    const count = this.cartItems.length;
    this.cartCountSubject.next(count);
    //console.log(this.wishlistItems)
  }
  private GetCartCountBackend():void{
    this.cartItems = [];
    const UserID=this.authSrv.getUserIDfromToken();
    this.getCartByUserIDApi(UserID).subscribe(res=>{
      this.GetcartItems=res;
      for (const item of this.GetcartItems) {
        //console.log(item.itemID)
        this.cartItems.push(item.itemID);
      }
      const count = this.cartItems.length;
      this.cartCountSubject.next(count);
      //console.log(this.wishlistItems)
    });
  }

  addToCart(cartInput:any){
    return this.http.post(this.baseserverurl+"cart/addToCart",cartInput);
  }
  removeCart(cartInput:any){
    return this.http.post(this.baseserverurl+"cart/removeCart",cartInput);
  }
  updateCartQty(cartInput:any){
    return this.http.post(this.baseserverurl+"cart/updateCartQty",cartInput);
  }
  getCartByUserIDApi(userID: number) {
    const apiUrl = this.baseserverurl+`cart/getCart?UserID=${userID}`;
    return this.http.get(apiUrl);
  }
}
