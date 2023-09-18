import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ms-tsf-business',
  templateUrl: './ms-tsf-business.component.html',
  styleUrls: ['./ms-tsf-business.component.css']
})
export class MsTSfBusinessComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Buy windows license from Microsoft’s certified partner India.');
    this.meta.addTag({name:'description',content:'If you are planning to buy windows 365 for business then UnifyCloud is the best store for you to compares available plans and buy cloud services at very competitive price.'});
    this.meta.addTag({name:'keywords',content:'Window 365 business'});
  }
}
