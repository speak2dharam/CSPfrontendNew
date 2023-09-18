import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Career – UnifyCloud India ');
    this.meta.addTag({name:'description',content:'Join our team at UnifyCloud India and help shape the future of cloud computing. We are a dynamic and innovative company that values creativity, collaboration, and a passion for making a difference.'});
    this.meta.addTag({name:'keywords',content:'Career Opportunity,'});
  }
} 
