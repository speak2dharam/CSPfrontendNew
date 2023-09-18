import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('');
    this.meta.addTag({name:'description',content:'Microsoft Cloud Products and Services Offered By UnifyCloud in India'});
    this.meta.addTag({name:'keywords',content:"UnifyCloud in India offers a wide range of Microsoft cloud products and services to fuel your organization's digital transformation. From Azure migration and optimization to Microsoft 365 deployment and management, our expert team ensures seamless adoption and maximizes the benefits of Microsoft's cloud offerings."});
  }
}
