import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ms-tsf-business-ahb',
  templateUrl: './ms-tsf-business-ahb.component.html',
  styleUrls: ['./ms-tsf-business-ahb.component.css']
})
export class MsTSfBusinessAhbComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Buy windows 365 business AHB license online in India ');
    this.meta.addTag({name:'description',content:'Access Anywhere, Across Devices. Perfect For Business. Buy windows 365 business license Plan Now! We are the one of the best cloud solution providers in India'});
    this.meta.addTag({name:'keywords',content:'window 365 business AHB'});
  }
}
