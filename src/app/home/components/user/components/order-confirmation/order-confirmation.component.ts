import { DecimalPipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  GetOrderID:string='';
  public OrderPricingOutPut:any=[];

  constructor(
    private route:ActivatedRoute,
    private authSrv:AuthService,
    private decimalPipe: DecimalPipe,
    private orderSrv:OrderService,
    private router:Router,
    ){ }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.GetOrderID = params.get('orderID') || ''; // Set the value from the parameter or use an empty string as fallback
      console.log("OrderID_"+this.GetOrderID)
    });
    this.bindOrderPricing();
  }
  bindOrderPricing(){
    const OrderID=parseInt(this.GetOrderID, 10);
    this.orderSrv.getOrderPricing(OrderID).subscribe(res=>{
      this.OrderPricingOutPut=res;
      console.log(this.OrderPricingOutPut)
      if(this.OrderPricingOutPut.length==0){
        this.router.navigate(['/'])
      }
      else{
        if(this.OrderPricingOutPut[0].orderStatus!='Confirmed'){
          this.router.navigate(['/'])
        }
      }
    });
  }
}
