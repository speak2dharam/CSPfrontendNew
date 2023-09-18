import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-microsoft-tsf-home',
  templateUrl: './microsoft-tsf-home.component.html',
  styleUrls: ['./microsoft-tsf-home.component.css']
})
export class MicrosoftTsfHomeComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Microsoft 365 for Home :: Unifycloud India');
    this.meta.addTag({name:'description',content:''});
    this.meta.addTag({name:'keywords',content:''});
  }
}
