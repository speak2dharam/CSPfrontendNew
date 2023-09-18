import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Contact for Microsoft Cloud Solutions in India – CSP Partner');
    this.meta.addTag({name:'description',content:'Contact us for buy Microsoft cloud services and become reseller of Microsoft cloud in India. Choose the Best Plan For Your Needs.'});
    this.meta.addTag({name:'keywords',content:'Microsoft Reseller in India, Become Cloud Reseller'});
  }
}
