import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { LtscProductsService } from 'src/app/services/ltsc-products.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  
  myForm: FormGroup; // Define the form group variable
  isLoading = false;
  public ProdAddOutput:any=[];
  publishers=[
    {
      PublisherName:'Microsoft',
      PublisherID:1
    }
    // {
    //   Ques:'Is it only for cloud?',
    //   Ans:`Yes. The programme's name, 'Cloud Solution Provider,' indicates that it is cloud-only. Furthermore, it is limited to Microsoft Public Cloud. Office365, SharePoint Online, Skype for Business Online, and more productivity tools are available. However, security features such as the Enterprise Mobility Suite (EMS) and Azure cloud platform services are also available.`
    // },
  ]
  constructor(private authsrv:AuthService,private ltscSrvc:LtscProductsService, private formBuilder:FormBuilder,private toastr: ToastrService){
    this.myForm = this.formBuilder.group({
      // Define your form controls and their initial values and validators
      ProductID: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      ProductTitle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      ProductDescription: [''],
      ProductCategory: ['', Validators.required],
      ProdPublisher: [1, Validators.required]
    });
  }
  // Convenience getter to access form controls in the template
  get formControls() {
    return this.myForm.controls;
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.isLoading = true;
      // Perform actions when the form is submitted and valid
      //console.log(this.myForm.value);
      //console.log(this.authsrv.getUserIDfromToken())
      const formData = this.myForm.value;

      // Parse the 'age' field as an integer
      formData.ProductCategory = parseInt(formData.ProductCategory, 10);
      formData.ProdPublisher = parseInt(formData.ProdPublisher, 10);
      formData.AddedBy=parseInt(this.authsrv.getUserIDfromToken(), 10);
      
      this.ltscSrvc.manageProducts(
        {
          "PID": 0,
          "ProductID": this.myForm.value.ProductID,
          "ProductTitle": this.myForm.value.ProductTitle,
          "ProductDescription": this.myForm.value.ProductDescription,
          "ProductCategory": formData.ProductCategory,
          "ProductImage": "",
          "ProdPublisher": formData.ProdPublisher,
          "AddedBy": formData.AddedBy,
          "Action": 1
        }
      ).subscribe(res=>{
        
        this.myForm.reset();
        //this.ProdAddAlert=true;
        this.isLoading = false;
        this.ProdAddOutput=res;
        //console.log(this.ProdAddOutput);
        if(this.ProdAddOutput[0]['status']=='success'){
          this.toastr.success(this.ProdAddOutput[0]['output_msg'], this.ProdAddOutput[0]['status']);
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
  ngOnInit(): void {
    this.bindLTSCProdCategory();
  }
  public ProdCatgryOutput:any=[];
  bindLTSCProdCategory(){
    this.ltscSrvc.getProductCategory().subscribe(res=>{
      this.ProdCatgryOutput=res;
      //console.log(res)
    })
  }
}
