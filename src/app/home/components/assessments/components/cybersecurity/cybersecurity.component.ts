import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-cybersecurity',
  templateUrl: './cybersecurity.component.html',
  styleUrls: ['./cybersecurity.component.css']
})
export class CybersecurityComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle(' Cybersecurity Assessment Services in India ');
    this.meta.addTag({name:'description',content:'If you are looking for Cybersecurity Assessment services in India, then UnifyCloud is one of the best options for you to complete your cybersecurity infrastructure and detailed recommendations to eliminate the risks timely.'});
    this.meta.addTag({name:'keywords',content:'Cybersecurity assessment'});
  }
}
