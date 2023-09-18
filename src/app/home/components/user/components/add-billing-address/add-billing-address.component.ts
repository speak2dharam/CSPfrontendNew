import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-billing-address',
  templateUrl: './add-billing-address.component.html',
  styleUrls: ['./add-billing-address.component.css']
})
export class AddBillingAddressComponent implements OnInit {
  addressForm: FormGroup;
  public getStateOutPut:any=[];
  public getcityOutPut:any=[];
  public addressOutPut:any=[];
  
  constructor(
    private formBuilder:FormBuilder,
    private toastr: ToastrService,
    private addressSrv:AddressService,
    private authsrv:AuthService
  )
  {
    this.addressForm = this.formBuilder.group({
      FullName: [''],
      CompanyName: [''],
      GSTNo: [''],
      Mobile: [''],
      AddressLine1: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(55)]],
      StateName: ['', Validators.required],
      CityName: ['', Validators.required],
      Pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }
  get formControls() {
    return this.addressForm.controls;
  }
  onSubmit(){
    if (this.addressForm.valid) {
      const formData = this.addressForm.value;
      // Parse the 'age' field as an integer
      formData.AddID=0;
      formData.UserID = parseInt(this.authsrv.getUserIDfromToken(), 10);
      
      formData.StateName=parseInt(formData.StateName, 10);
      formData.CityName=parseInt(formData.CityName, 10);
      formData.AddressType="Billing";
      formData.Action=2;

      console.log(formData);

      this.addressSrv.manageAddress(formData).subscribe(res=>{

        this.addressOutPut=res;

        if(this.addressOutPut[0]['status']=='success'){
          this.toastr.success(this.addressOutPut[0]['output_msg'], this.addressOutPut[0]['status']);
          this.addressForm.reset();
          window.location.reload();
        }
        else{
          this.toastr.error(this.addressOutPut[0]['output_msg'], this.addressOutPut[0]['status']);
        }
      });
    } 
    else {
      // Handle form errors
      this.toastr.error("Form is invalid", "Error");
    }
  }
  ngOnInit(): void {
    this.bindState();
    
  }
  bindState(){
    this.addressSrv.getStatelist().subscribe(res=>{
      this.getStateOutPut=res;
      //console.log(this.getStateOutPut)
    });
  }
  bindCity(StateID:number){
    this.addressSrv.getCitylist(StateID).subscribe(res=>{
      this.getcityOutPut=res;
      //console.log(this.getcityOutPut)
    });
  }
  onStateChange(event: Event) {
    //this.getcityOutPut=[];
    const selectedState = (event.target as HTMLSelectElement).value;
    console.log("Selected State_"+selectedState)
    this.bindCity(parseInt(selectedState, 10));
  }
}
