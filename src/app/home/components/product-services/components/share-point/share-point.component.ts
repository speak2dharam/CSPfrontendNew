import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-share-point',
  templateUrl: './share-point.component.html',
  styleUrls: ['./share-point.component.css']
})
export class SharePointComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Buy SharePoint License or Subscription online from reputed Reseller in India');
    this.meta.addTag({name:'description',content:'Buy SharePoint license from UnifyCloud, We are one of the best cloud solution provider in India also contact for becoming a premium reseller of Microsoft solutions.'});
    this.meta.addTag({name:'keywords',content:'SharePoint Online, SharePoint License'});
  }
}
