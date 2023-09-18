import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-power-apps',
  templateUrl: './power-apps.component.html',
  styleUrls: ['./power-apps.component.css']
})
export class PowerAppsComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Buy Microsoft power apps license in India online - UnifyCloud ');
    this.meta.addTag({name:'description',content:'Buy power apps and empower everyone in your organization to build business apps the easy way with Microsoft Power Apps and start modernizing processes and driving innovation.'});
    this.meta.addTag({name:'keywords',content:''});
  }
}
