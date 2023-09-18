import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-modernizationapp',
  templateUrl: './modernizationapp.component.html',
  styleUrls: ['./modernizationapp.component.css']
})
export class ModernizationappComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Application and database modernization services in India');
    this.meta.addTag({name:'description',content:'UnifyCloud application modernization services help you architect and modernize your applications so that they run faster, increase visibility at very competitive price.'});
    this.meta.addTag({name:'keywords',content:'App and DB Modernization'});
  }
}
