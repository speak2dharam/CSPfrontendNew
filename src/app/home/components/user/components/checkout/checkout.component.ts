import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { DecimalPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public OrderItemOutPut:any=[];
  public OrderPricingOutPut:any=[];
  public removeItemOutPut:any=[];
  public updateItemOutPut:any=[];
  public CountItems:number=0;
  public getAddressOutPut:any=[];
  public checkOutOutPut:any=[];


  selectedValues: { [key: number]: number } = {}; // To store selected values
  ItemSlug: string = ''; 
  GotBillingAddress:boolean=false;
  DisableCheckout=true;
  showLoader=false;

  constructor(
    private orderSrv:OrderService,
    private authSrv:AuthService,
    private decimalPipe: DecimalPipe,
    private toastr:ToastrService,
    private router:Router,
    private route:ActivatedRoute,
    private addressSrv:AddressService
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ItemSlug = params.get('slug') || ''; // Set the value from the parameter or use an empty string as fallback
      console.log("slug_"+this.ItemSlug)
    });
    this.bindOrderItem();
    this.bindOrderPricing();
    this.bindBillingAddress();
    //console.log("Order Type _"+this.orderSrv.getOrderType())
  }
  bindBillingAddress(){
    const GetUsrID=this.authSrv.getUserIDfromToken()
    this.addressSrv.getAddressByUserIDApi(GetUsrID).subscribe(res=>{
      this.getAddressOutPut=res;
      console.log(this.getAddressOutPut)
      if(this.getAddressOutPut.length==0){
        this.GotBillingAddress=false
      }
      else{
        this.GotBillingAddress=true
        this.DisableCheckout=false;
      }
    });
  }
  
  bindOrderPricing(){
    const OrderID=parseInt(this.ItemSlug, 10);
    this.orderSrv.getOrderPricing(OrderID).subscribe(res=>{
      this.OrderPricingOutPut=res;
      console.log(this.OrderPricingOutPut)
      if(this.OrderPricingOutPut.length==0){
        this.router.navigate(['/'])
      }
      else{
        if(this.OrderPricingOutPut[0].orderStatus!='Pending'){
          this.router.navigate(['/'])
        }
      }
    });
  }
  bindOrderItem(){
    const OrderID=parseInt(this.ItemSlug, 10);
    this.orderSrv.getOrderItems(OrderID).subscribe(res=>{
      this.OrderItemOutPut=res;
      console.log(this.OrderItemOutPut)
      if(this.OrderItemOutPut.length>0){
        this.CountItems=this.OrderItemOutPut.length;
        for (let i = 0; i <= this.OrderItemOutPut.length; i++) {
          //console.log("Item_"+i+"_" + this.OrderItemOutPut[i]['itemQty'])
          this.selectedValues[this.OrderItemOutPut[i]['itemID']] = this.OrderItemOutPut[i]['itemQty'];
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
  removeOrderItems(ItemID:number,orderID:number){
    const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "UserID": parseInt(GetUsrID, 10),
        "ProdItemID": ItemID,
        "Quantity": 0,
        "OrderID": orderID
      }
      this.orderSrv.removeOrderItem(dataArray).subscribe(res=>{
        this.removeItemOutPut=res;
        console.log(this.removeItemOutPut)
        if(this.removeItemOutPut[0]['status']=='success'){
          this.toastr.success(this.removeItemOutPut[0]['output_msg'], this.removeItemOutPut[0]['status']);
          window.location.reload();
        }
        else{
          this.toastr.error(this.removeItemOutPut[0]['output_msg'], this.removeItemOutPut[0]['status']);
        }
      });
  }
  updateOrderItem(ItemID:number,orderID:number,Qty:number){
    const parsedQty = +Qty; // Convert Qty to number using type assertion
    const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "UserID": parseInt(GetUsrID, 10),
        "ProdItemID": ItemID,
        "Quantity": parsedQty,
        "OrderID": orderID
      }
      this.orderSrv.updateOrderItems(dataArray).subscribe(res=>{
        this.updateItemOutPut=res;
        console.log(this.updateItemOutPut)
        if(this.updateItemOutPut[0]['status']=='success'){
          this.toastr.success(this.updateItemOutPut[0]['output_msg'], this.updateItemOutPut[0]['status']);
          window.location.reload();
        }
        else{
          this.toastr.error(this.updateItemOutPut[0]['output_msg'], this.updateItemOutPut[0]['status']);
        }
      });
  }
  checkoutOrder(GetOrderID:number){
    this.showLoader=true;
    const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "OrderID": GetOrderID,
        "UserID": parseInt(GetUsrID, 10),
        "CoupanCode": "",
        "OrderType": this.orderSrv.getOrderType()
      }
      this.orderSrv.checkoutOrder(dataArray).subscribe(res=>{
        this.checkOutOutPut=res;
        console.log(this.checkOutOutPut)
        if(this.checkOutOutPut[0]['status']=='success'){
          this.toastr.success(this.checkOutOutPut[0]['output_msg'], this.checkOutOutPut[0]['status']);
          //window.location.reload();
          this.router.navigate(['/user/order-confirmation/'+GetOrderID])
        }
        else{
          this.toastr.error(this.checkOutOutPut[0]['output_msg'], this.checkOutOutPut[0]['status']);
          this.showLoader=true;
        }
      });
  }
}
