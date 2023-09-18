import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-bizapps',
  templateUrl: './bizapps.component.html',
  styleUrls: ['./bizapps.component.css']
})
export class BizappsComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Biz apps Microsoft license price in India ');
    this.meta.addTag({name:'description',content:''});
    this.meta.addTag({name:'keywords',content:''});
  }
}
