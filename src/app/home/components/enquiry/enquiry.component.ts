import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Enquiry :: Unifycloud India');
    this.meta.addTag({name:'description',content:''});
    this.meta.addTag({name:'keywords',content:''});
  } 
  IsOpen=false;
  showmore(){
    this.IsOpen=true;
  }
  showless(){
    this.IsOpen=false;
  }
}
