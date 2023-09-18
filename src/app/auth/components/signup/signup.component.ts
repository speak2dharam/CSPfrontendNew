import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppSettingService } from 'src/app/services/app-setting.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  submitted=false; 
  onsuccess=false;
  showloader=false;
  GetEmailID="";
  appVersion="";
  constructor(private authSrc:AuthService,private snackBar: MatSnackBar,private router:Router,private fb: FormBuilder,private appver:AppSettingService) {}

   ngOnInit(){
    this.appVersion = this.appver.getAppVersionfromPackage();

    this.signupForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
    });
   }
   

  signupfn() {
   this.submitted=true;
   
  
   if(this.signupForm.valid){
    const getPassword=this.signupForm.value.password
    const getConfirmPassword=this.signupForm.value.confirmpassword
    this.GetEmailID=this.signupForm.value.email
    if(getPassword==getConfirmPassword){
      this.showloader=true;
      this.authSrc.signupUser({
        "FirstName":this.signupForm.value.firstname.toString(),
        "LastName":this.signupForm.value.lastname.toString(),
        "EmailID":this.signupForm.value.email.toString(),
        "Phone":this.signupForm.value.mobile.toString(),
        "UsrPassword":this.signupForm.value.password.toString(),
        "Action":1,
      }).subscribe(res=>{
        //console.log(res);
        if(res.result=='2'){
          this.onsuccess=true;
          this.authSrc.SetMessageAfterSignUp(this.GetEmailID)
          this.router.navigate(['/auth/verify-account']);
        }
        else{
          this.showloader=false;
          this.snackBar.open(res.output_msg, '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      });
      this.signupForm.reset();
      // this.submitted=false;
    }
    else{
      alert("Password and Confirm Password are not matched")
    }
   }
  }
}
