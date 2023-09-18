import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { LtscProductsService } from 'src/app/services/ltsc-products.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {
  AddCatForm: FormGroup; // Define the form group variable
  isLoading = false;
  public ProdAddOutput:any=[];

  constructor(private ltscSrvc:LtscProductsService,private formBuilder:FormBuilder,private toastr:ToastrService,private authsrv:AuthService){
    this.AddCatForm = this.formBuilder.group({
      // Define your form controls and their initial values and validators
      CategoryName: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  get formControls() {
    return this.AddCatForm.controls;
  }
  onSubmit() {
    if (this.AddCatForm.valid) {
      this.isLoading = true;
      
      const formData = this.AddCatForm.value;
      
      formData.AddedBy=parseInt(this.authsrv.getUserIDfromToken(), 10);
      
      this.ltscSrvc.manageProductCategory(
        {
          "CategoryID": 0,
          "CategoryName": formData.CategoryName,
          "CategorySlug": "",
          "AddedBy":formData.AddedBy,
          "Action":1
        }
      ).subscribe(res=>{
        
        this.AddCatForm.reset();
        //this.ProdAddAlert=true;
        this.isLoading = false;
        this.ProdAddOutput=res;
        //console.log(this.ProdAddOutput);
        if(this.ProdAddOutput[0]['status']=='success'){
          this.toastr.success(this.ProdAddOutput[0]['output_msg'], this.ProdAddOutput[0]['status']);
          this.bindLTSCProdCategory();
        }
        else{
          this.toastr.error(this.ProdAddOutput[0]['output_msg'], this.ProdAddOutput[0]['status']);
        }
      });
    } 
    else {
      // Handle form errors
      //console.log("Form is invalid");
      this.toastr.error("Form is invalid", "error");
    }
  }
  //Finish on submit
  ngOnInit():void{
    this.bindLTSCProdCategory();
  }
  public ProdCatgryOutput:any=[];
  bindLTSCProdCategory(){
    this.ltscSrvc.getProductCategory().subscribe(res=>{
      this.ProdCatgryOutput=res;
      //console.log(res)
    })
  }
  refresh(){
    //alert("hi")
    this.bindLTSCProdCategory();
  }
}
