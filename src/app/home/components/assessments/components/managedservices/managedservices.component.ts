import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-managedservices',
  templateUrl: './managedservices.component.html',
  styleUrls: ['./managedservices.component.css']
})
export class ManagedservicesComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Managed Cloud Service/Solution provider in India - UnifyCloud ');
    this.meta.addTag({name:'description',content:'UnifyCloud is one of the leading managed cloud service providers in India. Contact us for comprehensive managed cloud services that help organizations to accelerate cloud journey smoothly.'});
    this.meta.addTag({name:'keywords',content:'managed cloud services'});
  }
}
