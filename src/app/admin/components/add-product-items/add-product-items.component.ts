import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { BillingPlanService } from 'src/app/services/billing-plan.service';
import { LtscProductsService } from 'src/app/services/ltsc-products.service';

@Component({
  selector: 'app-add-product-items',
  templateUrl: './add-product-items.component.html',
  styleUrls: ['./add-product-items.component.css']
})
export class AddProductItemsComponent implements OnInit {
  public segments:any=[];
  public billPlans:any=[];
  public products:any=[];
  isLoading = false;
  public ProdAddOutput:any=[];
  myForm: FormGroup;
  constructor(private ltsc:LtscProductsService,private billplan:BillingPlanService,private authsrv:AuthService,private formBuilder:FormBuilder,private toastr: ToastrService){
    this.myForm = this.formBuilder.group({
      // Define your form controls and their initial values and validators
      //ProdID: [0],
      SkulD: [''],
      Skulitle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      SkuDescription: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(1500)]],
      Skulmage: [''],
      UnitOfMeasure: [''],
      TermDuration: [''],
      BillingPlan: ['', Validators.required],
      ProdPrice: ['', Validators.required],
      ProdSegment: ['', Validators.required],
      ProdTags: [],
      PID: ['', Validators.required]
      //Action: [1]
    });
  }
  get formControls() {
    return this.myForm.controls;
  }
  ngOnInit():void{
    this.BindSegment();
    this.BindBillingplan();
    this.BindProducts();
  }
  BindSegment(){
    this.ltsc.getSegment().subscribe(res=>{
      this.segments=res;
      //console.log(res)
      //this.toastr.success('sdfsd', 'sdfsd');
    })
  }
  BindBillingplan(){
    this.billplan.getBillingPlanType().subscribe(res=>{
      this.billPlans=res;
      //console.log(res)
    })
  }
  BindProducts(){
    this.ltsc.GetProducts({
      "PID": 0,
      "ProductID": "",
      "Action": 1
    }).subscribe(res=>{
      this.products=res;
      //console.log(this.products)
    })
  }
  onSubmit(){
    if (this.myForm.valid) {
      this.isLoading = true;
      
      const formData = this.myForm.value;

      // Parse the 'age' field as an integer
      formData.ProdID=0;
      formData.PID = parseInt(formData.PID, 10);
      formData.BillingPlan = parseInt(formData.BillingPlan, 10);
      formData.ProdPrice = parseFloat(formData.ProdPrice);
      formData.ProdSegment = parseInt(formData.ProdSegment, 10);
      formData.AddedBy=parseInt(this.authsrv.getUserIDfromToken(), 10);
      formData.Action=1;

      console.log(formData);

      this.ltsc.manageProductItems(formData).subscribe(res=>{
        //this.ProdAddAlert=true;
        this.isLoading = false;
        this.ProdAddOutput=res;

        //console.log(this.ProdAddOutput);

        if(this.ProdAddOutput[0]['status']=='success'){
          this.toastr.success(this.ProdAddOutput[0]['output_msg'], this.ProdAddOutput[0]['status']);
          this.myForm.reset();
        }
        else{
          this.toastr.error(this.ProdAddOutput[0]['output_msg'], this.ProdAddOutput[0]['status']);
        }
      });
      
    } 
    else {
      // Handle form errors
      console.log("Form is invalid");
    }
  }
}
