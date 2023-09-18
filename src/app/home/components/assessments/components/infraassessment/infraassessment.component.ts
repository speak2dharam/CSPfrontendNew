import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-infraassessment',
  templateUrl: './infraassessment.component.html',
  styleUrls: ['./infraassessment.component.css']
})
export class InfraassessmentComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Infrastructure Consulting and Assessment Services in India');
    this.meta.addTag({name:'description',content:'If you are looking for infrastructure assessment and consulting services then UnifyCloud is one of the best options for you. Contact us for Cloud Costing & ROI, Visibility, Infrastructure Optimization, Cybersecurity and Control as well as Assessment Insights Service.'});
    this.meta.addTag({name:'keywords',content:'Infrastructure assessment services'});
  }
}
