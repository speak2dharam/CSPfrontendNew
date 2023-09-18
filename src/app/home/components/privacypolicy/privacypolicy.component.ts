import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css']
})
export class PrivacypolicyComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Privacy Policy :: Unifycloud India');
    this.meta.addTag({name:'description',content:''});
    this.meta.addTag({name:'keywords',content:''});
  }
}
