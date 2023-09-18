import { Component,OnInit,Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillingPlanService } from 'src/app/services/billing-plan.service';
import { LtscProductsService } from 'src/app/services/ltsc-products.service';
import { DecimalPipe } from '@angular/common';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-ltsc-page',
  templateUrl: './ltsc-page.component.html',
  styleUrls: ['./ltsc-page.component.css']
})
export class LtscPageComponent implements OnInit  {
  ItemSlug: string = ''; 
  public ProdAddOutput:any=[];
  public billPlans:any=[];
  public segments:any=[];
  public AddWishOutPut:any=[];
  public cartOutPut:any=[];
  public PlaceOrderOutPut:any=[];
  public ProdCatgryOutput:any=[];
  Isloading:boolean=false;
  ItemFound:boolean=true;
  IsLeggedIn:boolean=false;
  selectedValues: { [key: number]: number } = {}; // To store selected values
  quantity: number=0;

  CalculatedValue = 0;
  ItemPrice = 0;

  minValue: number = 300; // Initialize with default minimum value
  maxValue: number = 1772470; // Initialize with default maximum value

  //selectedBillPlan: string[] = [];//Selected bill plan
  selectedBillPlan: { [id: string]: boolean } = {};
  setBillPlanFltr:any=[];

  selectedSegmentPlan: { [id: string]: boolean } = {};
  setSegmentFltr:any=[];

  setCategoryFilter:number=0;

  @Input() receivedValue: string="";

  constructor(
    private route:ActivatedRoute,
    private ltsc:LtscProductsService,
    private billplan:BillingPlanService,
    private decimalPipe: DecimalPipe,
    private wishSrc:WishlistService,
    private toastr: ToastrService,
    private authSrv:AuthService,
    private cartSrv:CartService,
    private orderSrv:OrderService,
    private router:Router
    ){
     
    }
  ngOnInit(): void {
    this.ItemSlug=this.ltsc.getCategorySlug();
    
    //console.log(this.ItemSlug)
    //this.bindProductItems(this.minValue,this.maxValue,'','',0);
    this.BindBillingplan();
    this.BindSegment();
    this.bindLTSCProdCategory();
    this.IsLeggedIn=this.authSrv.IsLoggedIn();
    //this.selectedValues[1] = 1;
    if(this.receivedValue!=''){
      this.setCategoryFilter=parseInt(this.receivedValue, 10)
      this.bindProductItems(this.minValue,this.maxValue,this.setBillPlanFltr.join(', '),this.setSegmentFltr.join(', '),this.setCategoryFilter);
    }
    else{
      this.setCategoryFilter=0
      this.bindProductItems(this.minValue,this.maxValue,this.setBillPlanFltr.join(', '),this.setSegmentFltr.join(', '),this.setCategoryFilter);
    }
  }
  onRangeChange() {
    //alert("Hii");
    console.log('Min Value:', this.minValue);
    console.log('Max Value:', this.maxValue);
    this.bindProductItems(this.minValue,this.maxValue,this.setBillPlanFltr.join(', '),this.setSegmentFltr.join(', '),this.setCategoryFilter);
  }
  billPlanFilter(){
    //alert("hii")
    //console.log("Bill Filter_"+getBillPlan)
    this.setBillPlanFltr=Object.keys(this.selectedBillPlan).filter(key => this.selectedBillPlan[key]);
    console.log("hii_"+this.setBillPlanFltr) 

    //const yourArray = ['item1', 'item2', 'item3']; // Replace with your array

    //this.arrayToString = this.setBillPlanFltr.join(', '); // Converts the array to a string separated by commas

    this.bindProductItems(this.minValue,this.maxValue,this.setBillPlanFltr.join(', '),this.setSegmentFltr.join(', '),this.setCategoryFilter);
  }
  segmentFilter(){
    this.setSegmentFltr=Object.keys(this.selectedSegmentPlan).filter(key => this.selectedSegmentPlan[key]);
    console.log("Segment_"+this.setSegmentFltr) 
    this.bindProductItems(this.minValue,this.maxValue,this.setBillPlanFltr.join(', '),this.setSegmentFltr.join(', '),this.setCategoryFilter);
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

  bindProductItems(minPrice:number,maxPrice:number,BillPlanID:string,SegmentID:string,categoryID:number){
    this.Isloading=true;
    const dataArray={
      "ItemSlug": "",
      "CategoryID": categoryID,
      "CategorySlug": "",
      "BillPlanID": BillPlanID,
      "SegmentID":SegmentID,
      "MinPrice": minPrice,
      "MaxPrice": maxPrice,
      "Discount":0
    }
    this.ltsc.getProductItems(dataArray).subscribe(res=>{
      this.ProdAddOutput=res;
      console.log(this.ProdAddOutput.length)
      if(this.ProdAddOutput.length>0){
        this.Isloading=false;
        this.ItemFound=true;
        for (let i = 1; i <= this.ProdAddOutput.length; i++) {
          this.selectedValues[i] = 1;
        }
      }
      else{
        this.ItemFound=false;
        this.Isloading=false;
      }
    });
  }
  BindBillingplan(){
    this.billplan.getBillingPlanType().subscribe(res=>{
      this.billPlans=res;
      //console.log(this.billPlans)
    })
  }
  BindSegment(){
    this.ltsc.getSegment().subscribe(res=>{
      this.segments=res;
      //console.log(this.segments)
      //this.toastr.success('sdfsd', 'sdfsd');
    })
  }
  
  bindLTSCProdCategory(){
    this.ltsc.getProductCategory().subscribe(res=>{
      this.ProdCatgryOutput=res;
      //console.log("Category_"+this.ProdCatgryOutput)
    })
  }
  addToWishlist(product: any): void {
    this.wishSrc.addToWishlist(product);
    //console.log(product)
  }
  addWishItem(ItemID:number){
    
    if(this.IsLeggedIn){
      const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "WID": 0,
        "ItemID": ItemID,
        "UserID": parseInt(GetUsrID, 10),
        "Action":1
      }
      this.wishSrc.AddWishAPI(dataArray).subscribe(res=>{
        this.AddWishOutPut=res;
        console.log(this.AddWishOutPut)
        if(this.AddWishOutPut[0]['status']=='success'){
          this.toastr.success(this.AddWishOutPut[0]['output_msg'], this.AddWishOutPut[0]['status']);
          this.addToWishlist(ItemID);
        }
        else{
          this.toastr.error(this.AddWishOutPut[0]['output_msg'], this.AddWishOutPut[0]['status']);
        }
      });
    }
    else{
      this.toastr.error("Logged in first", "Warning");
    }
  }
  addToCartlist(product: any): void {
    this.cartSrv.addToCartlist(product);
    //console.log(product)
  }
  addtocartfun(ItemID:number,Qty:number){
    const parsedQty = +Qty; // Convert Qty to number using type assertion
    console.log("Qty "+parsedQty,"Item ID "+ItemID)
    if(this.IsLeggedIn){
      const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "ItemID": ItemID,
        "UserID": parseInt(GetUsrID, 10),
        "Quantity": parsedQty
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
      });
    }
    else{
      this.toastr.error("Logged in first", "Warning");
    }
  }
  buyNowfun(ItemID:number,Qty:number){
    const parsedQty = +Qty; // Convert Qty to number using type assertion
    if(this.IsLeggedIn){
      const GetUsrID=this.authSrv.getUserIDfromToken()
      const dataArray={
        "UserID": parseInt(GetUsrID, 10),
        "ProdItemID": ItemID,
        "Quantity": parsedQty,
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
    else{
      this.toastr.error("Logged in first", "Warning");
    }
    
  }
}
