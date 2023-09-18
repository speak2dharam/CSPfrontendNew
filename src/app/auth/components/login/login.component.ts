import { Component  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppSettingService } from 'src/app/services/app-setting.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showloader=false;
  appVersion="";
  constructor(private authSrc:AuthService,private snackBar: MatSnackBar,private router:Router, private appver:AppSettingService){}
  ngOnInit(){
    this.appVersion = this.appver.getAppVersionfromPackage();
  }
  loginform=new FormGroup({
    emailID:new FormControl("",[Validators.required,Validators.email]),
    pwd:new FormControl('',[
      Validators.required,
      
    ])
  });

  get EmailID():FormControl{
    return this.loginform.get("emailID") as FormControl;
  }
  get Pwd():FormControl{
    return this.loginform.get("pwd") as FormControl;
  }
  errmsg=false;
  loginScsMsg='';
  loginfn(){
    this.showloader=true;
    if(this.loginform.valid){
      //....
      this.authSrc.loginUser({
        "EmailID":this.loginform.value.emailID,
        "Password":this.loginform.value.pwd
      }).subscribe(res=>{
        
        //console.log(res);
        if(res.usrID=="-1"){
          this.snackBar.open('Check emailid and password', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.showloader=false;
        }
        if(res.usrID=="-2"){
          this.snackBar.open('Account activation link sent on email, please verify', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.authSrc.SetMessageAfterSignUp(this.loginform.value.emailID)
          this.router.navigate(['/auth/verify-account']);
        }
        if(res.usrID>"0")
        {
          // this.snackBar.open('Login Successfully', '', {
          //   duration: 3000,
          //   horizontalPosition: 'center',
          //   verticalPosition: 'top',
          //   panelClass: ['my-snackbar', 'success-snackbar']
          // });

          for(let key in res){
            localStorage.setItem(key, res[key]);
          }
          if(res.UserType='Admin'){
            this.router.navigate(['/admin/dashboard']);
          }
          else {
            this.router.navigate(['']);
          }
          
        }

        
      });
      //...
    }
    else{
      //this.loginScsMsg=`<div class='text-warning'>Enter login credentials</div>`
      this.snackBar.open('Enter login credentials', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['my-snackbar', 'success-snackbar']
      });
      this.showloader=false;
    }
  }
}
