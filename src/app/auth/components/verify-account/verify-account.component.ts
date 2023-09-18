import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {
  verifyForm!: FormGroup;
  OnLoadEmail: string='';
  HasVerified=false;
  showloader=false;
  submitted=false;
  constructor(private auth:AuthService,private router:Router,private fb: FormBuilder,private snackBar: MatSnackBar){}
  ngOnInit(): void {
    console.log(this.auth.GetMessageAfterSignup())
    this.OnLoadEmail=this.auth.GetMessageAfterSignup()
    
    if(this.OnLoadEmail==""){
      this.router.navigate(['/error'])
    }
    else
    this.verifyForm = this.fb.group({
      //email: ['', [Validators.required, Validators.email]],
      actkey: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }
  
  verifyfn(){
    this.submitted=true;
    if(this.verifyForm.valid){
      this.showloader=true;
      const GetActKey=this.verifyForm.value.actkey
      //console.log(GetActKey)
      this.auth.verifyUser({
        "EmailID":this.OnLoadEmail,
        "ActivationKey":GetActKey,
        "Action":2
      }).subscribe(res=>{
        if(res.result=='2')
        {
          this.showloader=false;
          this.HasVerified=true;
        }
        else{
          this.showloader=false;
          this.HasVerified=false;
        }
        //console.log(res)
      });
    }
  }
  resendKey(){
    this.showloader=true;
    this.auth.verifyUser({
      "EmailID":this.OnLoadEmail,
      "ActivationKey":"",
      "Action":1
    }).subscribe(res=>{
      this.showloader=false;
      console.log(res)
      this.snackBar.open('Account activation link sent on email, please verify', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
  }
}
