import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-msproject',
  templateUrl: './msproject.component.html',
  styleUrls: ['./msproject.component.css']
})
export class MsprojectComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Buy MS-Project License Online from UnifyCloud in India ');
    this.meta.addTag({name:'description',content:'We at UnifyCloud provides MS-Project subscription as well as other Microsoft’s cloud services such as azure, office 365 and other infra-assessment and migration services. '});
    this.meta.addTag({name:'keywords',content:'MS-Project License, Microsoft Project Subscription Price'});
  }
}
