import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppSettingService } from 'src/app/services/app-setting.service';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ShowPopup=false;
  appVersion="";
  constructor(private subscribesrc:SubscribeService,private appver:AppSettingService){}
  showPopUp(){
    this.ShowPopup=true;
  }
  
  ngOnInit(): void {
    this.appVersion = this.appver.getAppVersionfromPackage();
    //localStorage.setItem('hasSeenVdo', 'yes');
    const delayTime = 3000; // in milliseconds
    const vdoseenSts = sessionStorage.getItem('hasSeenVdo');
    if(vdoseenSts==null){
      //this.ShowPopup=true;
      sessionStorage.setItem('hasSeenVdo', 'yes');

      setTimeout(() => {
        //this.showPopUp();
      }, delayTime);
      
    }
  };
  hidevdoPop() {
    this.ShowPopup=false;
  };
  
  addSubsForm=new FormGroup({
    emailID:new FormControl("",[Validators.required,Validators.email]),
  });

  get EmailID():FormControl{
    return this.addSubsForm.get("emailID") as FormControl;
  }
  WasSent=false;
  submitEnquery(){
    if(this.addSubsForm.valid){
      this.subscribesrc.addsubscriber({
        "EmailID":this.addSubsForm.value.emailID
      }).subscribe(res=>{
        // console.log(res);
        if(res=="success"){
          // alert("success")
          this.WasSent=true;
        }
        else{
          alert("Try again")
        }
      });
    }
  }
}
