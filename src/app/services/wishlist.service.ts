import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiurlService } from './apiurl.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistItems: any[] = [];
  private wishlistCountSubject = new BehaviorSubject<number>(0);
  public GetwishlistItems:any=[];

  constructor(private http:HttpClient,private baseapi:ApiurlService,private authSrv:AuthService) { }
  baseserverurl=this.baseapi.getApiBaseUrl();

  addToWishlist(GetItemID:any):void{
    //console.log("Before Add Length "+this.wishlistItems)
    this.wishlistItems.push(GetItemID);
    //console.log("After Add Length "+this.wishlistItems)
    this.updateWishlistCount();
    
  }
  getWishlistCount(): Observable<number> {
    this.GetWishCoutBackend();
    console.log("Observable"+this.wishlistCountSubject.asObservable())
    return this.wishlistCountSubject.asObservable();
    
  }

  private updateWishlistCount(): void {
    const count = this.wishlistItems.length;
    this.wishlistCountSubject.next(count);
    //console.log(this.wishlistItems)
  }
  private GetWishCoutBackend():void{
    this.wishlistItems = [];
    const UserID=this.authSrv.getUserIDfromToken();
    this.getWishlistByUserIDApi(UserID).subscribe(res=>{
      this.GetwishlistItems=res;
      for (const item of this.GetwishlistItems) {
        //console.log(item.itemID)
        this.wishlistItems.push(item.itemID);
      }
      const count = this.wishlistItems.length;
      this.wishlistCountSubject.next(count);
      //console.log(this.wishlistItems)
    });
  }
  AddWishAPI(prd:any){
    return this.http.post(this.baseserverurl+"wishlist/manageWishlist",prd);
  }
  getWishlistByUserIDApi(userID: number) {
    const apiUrl = this.baseserverurl+`wishlist/GetWishlist?UserID=${userID}`;
    return this.http.get(apiUrl);
  }
}
