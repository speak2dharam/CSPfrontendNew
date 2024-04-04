import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-responsive-ai-assessment',
  templateUrl: './responsive-ai-assessment.component.html',
  styleUrls: ['./responsive-ai-assessment.component.css']
})
export class ResponsiveAiAssessmentComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Responsible AI Assessment Services by UnifyCloud: Ethical AI Solutions');
    this.meta.addTag({name:'description',content:"Discover Responsible AI assessment Services by UnifyCloud, offering comprehensive ethical AI solutions. Our kit includes governance tools, compliance frameworks, and ethical AI algorithms for transparent and accountable AI deployment."});
    this.meta.addTag({name:'keywords',content:'Responsible AI Assessment Services'});
  }
}
