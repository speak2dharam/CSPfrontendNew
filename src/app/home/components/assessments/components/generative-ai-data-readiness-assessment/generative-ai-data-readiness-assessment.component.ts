import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-generative-ai-data-readiness-assessment',
  templateUrl: './generative-ai-data-readiness-assessment.component.html',
  styleUrls: ['./generative-ai-data-readiness-assessment.component.css']
})
export class GenerativeAiDataReadinessAssessmentComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Generative AI Data Readiness Assessment Services - UnifyCloud');
    this.meta.addTag({name:'description',content:"UnifyCloud's Generative AI Data Readiness Assessment evaluates your data's readiness for AI applications. Discover gaps, enhancements, and a roadmap for optimal data readiness."});
    this.meta.addTag({name:'keywords',content:'Generative AI Assessment'});
  }
}
