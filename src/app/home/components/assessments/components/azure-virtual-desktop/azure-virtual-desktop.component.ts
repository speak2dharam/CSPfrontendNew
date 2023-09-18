import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-azure-virtual-desktop',
  templateUrl: './azure-virtual-desktop.component.html',
  styleUrls: ['./azure-virtual-desktop.component.css']
})
export class AzureVirtualDesktopComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Maximize Your Azure Virtual Desktop Potential with UnifyCloud’s Assessment Services');
    this.meta.addTag({name:'description',content:'Experience the power of Azure Virtual Desktop with our comprehensive solutions. Empower your workforce with secure, scalable, and flexible virtual desktop infrastructure.'});
    this.meta.addTag({name:'keywords',content:''});
  }
}
