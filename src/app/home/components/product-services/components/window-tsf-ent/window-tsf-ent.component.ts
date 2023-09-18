import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-window-tsf-ent',
  templateUrl: './window-tsf-ent.component.html',
  styleUrls: ['./window-tsf-ent.component.css']
})
export class WindowTsfEntComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Buy Windows 365 Enterprise Cloud PC Plans Online in India ');
    this.meta.addTag({name:'description',content:'Buy Windows 365 Premium Subscription Plan in India for business from UnifyCloud store in various configurations (CPU, RAM, Storage) and run high-performance workloads. '});
    this.meta.addTag({name:'keywords',content:'Windows 365 Enterprise '});
  }
}
