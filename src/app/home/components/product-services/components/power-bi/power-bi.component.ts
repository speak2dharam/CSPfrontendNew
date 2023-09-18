import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.css']
})
export class PowerBIComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Buy Power BI Subscription Online from Microsoft’s Certified Reseller in India ');
    this.meta.addTag({name:'description',content:'If you are planning to buy Power BI license then UnifyCloud is one of the best shops for you. We are the Microsoft’s authorized CSP partner in India to reseller cloud services.  '});
    this.meta.addTag({name:'keywords',content:'Microsoft Power BI, Power BI Subscriptions, Power BI License'});
  }
}
