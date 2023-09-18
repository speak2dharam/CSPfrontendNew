import { Component } from '@angular/core';

@Component({
  selector: 'app-become-seller-form',
  templateUrl: './become-seller-form.component.html',
  styleUrls: ['./become-seller-form.component.css']
})
export class BecomeSellerFormComponent {
  AccStep:string="";
  AccStepBox:boolean=false;
  AddSeller(){
    // alert("hii")
    this.AccStep="active";
    this.AccStepBox=true;
  }
  
}
