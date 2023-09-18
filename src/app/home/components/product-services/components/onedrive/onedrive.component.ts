import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-onedrive',
  templateUrl: './onedrive.component.html',
  styleUrls: ['./onedrive.component.css']
})
export class OnedriveComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('OneDrive :: Unifycloud India');
    this.meta.addTag({name:'description',content:''});
    this.meta.addTag({name:'keywords',content:''});
  }
}
