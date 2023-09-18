import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-becomeseller',
  templateUrl: './becomeseller.component.html',
  styleUrls: ['./becomeseller.component.css']
})
export class BecomesellerComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Partnering with UnifyCloud and apply to become a cloud reseller today ');
    this.meta.addTag({name:'description',content:'Unlock new opportunities and boost your revenue by becoming a cloud reseller with UnifyCloud. Partner with us to offer cutting-edge cloud services, including infra-assessment and migration, and receive dedicated support from our experienced team and apply to become a cloud reseller today.'});
    this.meta.addTag({name:'keywords',content:'Become a reseller'});
  }
}
