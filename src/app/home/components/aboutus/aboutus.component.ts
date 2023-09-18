import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Microsoft Cloud Solution Provider (CSP) and Premier Reseller in India ');
    this.meta.addTag({name:'description',content:'UnifyCloud is a Microsoft Cloud Solution Provider (CSP) and premier reseller in India. As a trusted Microsoft CSP Partner, we strive to assist organizations in transforming their businesses with cloud-based solutions, which drive innovation and enable agility.'});
    this.meta.addTag({name:'keywords',content:'Cloud Reseller, Microsoft Reseller, Microsoft Channel Partner, Cloud Solutions'});
  }
  ngOnInit() {
    
  }
}
