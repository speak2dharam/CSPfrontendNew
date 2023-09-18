import { Component,AfterViewInit  } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Microsoft Cloud Solution Provider CSP Partner in India - UnifyCloud');
    this.meta.addTag({name:'description',content:'We at UnifyCloud authorized CSP partner in providing Microsoft cloud solution such as Office 365, Azure, Power Apps as well as infra-assessment and cloud migration services effectively.'});
    this.meta.addTag({name:'keywords',content:'CSP Partner, Cloud Solutions, Infra-assessment'});
  }
  ngOnInit() {
    
  }
  
}
