import { DecimalPipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  public cartOutPut:any=[];
  public removeCartOutPut:any=[];
  public updateCartQtyOutPut:any=[];
  public PlaceOrderOutPut:any=[];
  ItemSlug: string = ''; 
  selectedValues: { [key: number]: number } = {}; // To store selected values

  constructor(
    private cartSrv:CartService,
    private toastr: ToastrService,
    private authSrv:AuthService,
    private decimalPipe: DecimalPipe,
    private orderSrv:OrderService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.bindCartlist()
  }
  addToCartlist(product: any): void {
    this.cartSrv.addToCartlist(product);
    //console.log(product)
  }
  addcartItem(ItemID:number){
    
    if(this.authSrv.IsLoggedIn()){
      this.addToCartlist(ItemID);
    }
    else{
      this.toastr.error("Logged in first", "Warning");
    }
  }
  bindCartlist(){
    const UserID=this.authSrv.getUserIDfromToken();
    this.cartSrv.getCartByUserIDApi(UserID).subscribe(res=>{
      this.cartOutPut=res;
      console.log(this.cartOutPut)
      if(this.cartOutPut.length>0){
        for (let i = 0; i <= this.cartOutPut.length; i++) {
          //console.log("Item_"+i+"_" + this.cartOutPut[i]['itemQty'])
          this.selectedValues[this.cartOutPut[i]['itemID']] = this.cartOutPut[i]['itemQty'];
        }
      }
    });
  }
  CalculateDicountAmt(PrdPrice:number,DscntValue:number,DscntType:string):string | null{
    let clcAmt:number=0
    if(DscntType!=='')
    {
      if(DscntType==='Fixed'){
        clcAmt=PrdPrice-DscntValue
      }
      if(DscntType==='Percentage'){
        let PrtAmt:number
        PrtAmt=PrdPrice*DscntValue/100;
        clcAmt=PrdPrice-PrtAmt
      }
    }
    else{
      clcAmt=PrdPrice
    }
    return this.formatPrice(clcAmt);
  }
  formatPrice(price: number): string |null{
    if (typeof price === 'string') {
      price = parseFloat(price); // Convert string to number   
    }
    //console.log(this.decimalPipe.transform(price,'1.2-2'))
    return this.decimalPipe.transform(price,'1.2-2');
  }
  removecartfun(ItemID:number){
    const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "ItemID": ItemID,
        "UserID": parseInt(GetUsrID, 10),
        "Quantity": 0
      }
      this.cartSrv.removeCart(dataArray).subscribe(res=>{
        this.removeCartOutPut=res;
        console.log(this.removeCartOutPut)
        if(this.removeCartOutPut[0]['status']=='success'){
          this.toastr.success(this.removeCartOutPut[0]['output_msg'], this.removeCartOutPut[0]['status']);
          window.location.reload();
        }
        else{
          this.toastr.error(this.removeCartOutPut[0]['output_msg'], this.removeCartOutPut[0]['status']);
        }
      });
  }
  updateCartQty(ItemID:number,Qty:number){
    const parsedQty = +Qty; // Convert Qty to number using type assertion
    const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "ItemID": ItemID,
        "UserID": parseInt(GetUsrID, 10),
        "Quantity": parsedQty
      }
      this.cartSrv.updateCartQty(dataArray).subscribe(res=>{
        this.updateCartQtyOutPut=res;
        console.log(this.updateCartQtyOutPut)
        if(this.updateCartQtyOutPut[0]['status']=='success'){
          this.toastr.success(this.updateCartQtyOutPut[0]['output_msg'], this.updateCartQtyOutPut[0]['status']);
          window.location.reload();
        }
        else{
          this.toastr.error(this.updateCartQtyOutPut[0]['output_msg'], this.updateCartQtyOutPut[0]['status']);
        }
      });
  }
  placeOrderfun(){
    const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "UserID": parseInt(GetUsrID, 10),
        "ProdItemID": 0,
        "Quantity": 0,
        "IsBuyNow": 0
      }
      this.orderSrv.placeOrder(dataArray).subscribe(res=>{
        this.PlaceOrderOutPut=res;
        
        const getOutPut=this.PlaceOrderOutPut
        console.log(this.PlaceOrderOutPut)
        if(this.PlaceOrderOutPut>0){
          this.orderSrv.setOrderType(2);
          this.router.navigate(['/user/checkout/'+this.PlaceOrderOutPut])
        }
        else{
          this.toastr.error("Some error occured, try again", "Error");
        }
      });
  }
}
