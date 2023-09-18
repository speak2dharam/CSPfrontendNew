import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.css']
})
export class EnquiryformComponent implements OnInit {
  ngOnInit(): void {
    this.genCaptcha();
  }
  randomString = '';
  genCaptcha(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
      this.randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    //console.log(this.randomString); // Output: "3FjRbMnL2t"
  }
  refreshCaptcha(){
    this.randomString = '';
    this.genCaptcha();
  }

  HasEnquired = false;
  WasSent=true;
  constructor(private enquiryService:EnquiryService){}
  AddEnqForm=new FormGroup({
    fullName:new FormControl("",[Validators.required]),
    companyName:new FormControl("",[Validators.required]),
    emailID:new FormControl("",[Validators.required,Validators.email]),
    mobileNo:new FormControl("",[
      Validators.required,
      Validators.pattern("[0-9]*")
      // Validators.minLength(10),
      // Validators.maxLength(10)
    ]),
    jobTitle:new FormControl("",[Validators.required]),
    weburl:new FormControl("",[Validators.required]),
    productChoose:new FormControl("",[Validators.required]),
    areUreseller:new FormControl(),
    concern:new FormControl(""),
    captcha:new FormControl("",[Validators.required]),
  });
  
  get FullName():FormControl{
    return this.AddEnqForm.get("fullName") as FormControl;
  }
  get CompanyName():FormControl{
    return this.AddEnqForm.get("companyName") as FormControl;
  }
  get EmailID():FormControl{
    return this.AddEnqForm.get("emailID") as FormControl;
  }
  get MobileNo():FormControl{
    return this.AddEnqForm.get("mobileNo") as FormControl;
  }
  get JobTitle():FormControl{
    return this.AddEnqForm.get("jobTitle") as FormControl;
  }
  get WebUrl():FormControl{
    return this.AddEnqForm.get("weburl") as FormControl;
  }
  get ProductChoose():FormControl{
    return this.AddEnqForm.get("productChoose") as FormControl;
  }
  get Captcha():FormControl{
    return this.AddEnqForm.get("captcha") as FormControl;
  }
  // get AreuReseller():FormControl{
  //   return this.AddEnqForm.get("areUreseller") as FormControl;
  // }
  // get Concern():FormControl{
  //   return this.AddEnqForm.get("concern") as FormControl;
  // }

  

  ErrrMsg:boolean=false;
  Lodr=false;
  wrongCaptcha=false;
  submitEnquery(){
    //console.log(this.AddEnqForm.valid)
    var getutype=this.AddEnqForm.value.areUreseller;
    var  usertype="0";
    if(this.AddEnqForm.valid){
      if(this.randomString===this.AddEnqForm.value.captcha){
        this.ErrrMsg=false;
        this.Lodr=true;
        if(getutype==""){
          usertype="0"
        }
        if(getutype==true){
          usertype="1"
        }
        //alert(usertype)
        this.enquiryService.addEnquiry({
          "FullName":this.AddEnqForm.value.fullName,
          "EmailID":this.AddEnqForm.value.emailID,
          "Mobile":this.AddEnqForm.value.mobileNo,
          "JobTitle":this.AddEnqForm.value.jobTitle,
          "InterestedIn":this.AddEnqForm.value.productChoose,
          "eURL":'',
          //"UserType":this.AddEnqForm.value.areUreseller,
          "UserType":usertype,
          "Website":this.AddEnqForm.value.weburl,
          "CompanyName":this.AddEnqForm.value.companyName,
          "TeamSize":'',
          "ExtraClm":this.AddEnqForm.value.concern,
          "EnqType":'1',
        }).subscribe(res=>{
          //console.log(res);
          if(res=="success"){
            //alert("success")
            this.HasEnquired=true;
            this.WasSent=true
          }
          else{
            //alert("Try again")
            this.HasEnquired=true;
            this.WasSent=false;
          }
        });
      }
      else{
        this.refreshCaptcha();
        this.wrongCaptcha=true;
      }
      
    }
    else{
      this.ErrrMsg=true;
    }
  };
}
