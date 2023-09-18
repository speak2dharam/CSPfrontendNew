import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public WishOutPut:any=[];
  public RemoveWishOutPut:any=[];
  public cartOutPut:any=[];
  public PlaceOrderOutPut:any=[];

  constructor(
    private wishSrc:WishlistService,
    private toastr: ToastrService,
    private authSrv:AuthService,
    private cartSrv:CartService,
    private orderSrv:OrderService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.bindWishlist();
  }
  bindWishlist(){
    const UserID=this.authSrv.getUserIDfromToken();
    this.wishSrc.getWishlistByUserIDApi(UserID).subscribe(res=>{
      this.WishOutPut=res;
      console.log(this.WishOutPut)
    });
  }
  removeWishItem(ItemID:number){
    const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "WID": 0,
        "ItemID": ItemID,
        "UserID": parseInt(GetUsrID, 10),
        "Action":3
      }
      this.wishSrc.AddWishAPI(dataArray).subscribe(res=>{
        this.RemoveWishOutPut=res;
        console.log(this.RemoveWishOutPut)
        if(this.RemoveWishOutPut[0]['status']=='success'){
          this.toastr.success(this.RemoveWishOutPut[0]['output_msg'], this.RemoveWishOutPut[0]['status']);
          window.location.reload();
        }
        else{
          this.toastr.error(this.RemoveWishOutPut[0]['output_msg'], this.RemoveWishOutPut[0]['status']);
        }
      });
  }
  addToCartlist(product: any): void {
    this.cartSrv.addToCartlist(product);
    //console.log(product)
  }
  addtocartfun(ItemID:number){
    const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "ItemID": ItemID,
        "UserID": parseInt(GetUsrID, 10),
        "Quantity": 1
      }
      this.cartSrv.addToCart(dataArray).subscribe(res=>{
        this.cartOutPut=res;
        console.log(this.cartOutPut)
        if(this.cartOutPut[0]['status']=='success'){
          this.toastr.success(this.cartOutPut[0]['output_msg'], this.cartOutPut[0]['status']);
          this.addToCartlist(ItemID)
        }
        else{
          this.toastr.error(this.cartOutPut[0]['output_msg'], this.cartOutPut[0]['status']);
        }
        this.removeWishItem(ItemID);
      });
  }
  buyNowfun(ItemID:number){
    const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "UserID": parseInt(GetUsrID, 10),
        "ProdItemID": ItemID,
        "Quantity": 1,
        "IsBuyNow": 1
      }
      this.orderSrv.placeOrder(dataArray).subscribe(res=>{
        this.PlaceOrderOutPut=res;
        
        const getOutPut=this.PlaceOrderOutPut
        console.log(this.PlaceOrderOutPut)
        if(this.PlaceOrderOutPut>0){
          this.router.navigate(['/user/checkout/'+this.PlaceOrderOutPut])
        }
        else{
          this.toastr.error("Some error occured, try again", "Error");
        }
      });
  }
}
