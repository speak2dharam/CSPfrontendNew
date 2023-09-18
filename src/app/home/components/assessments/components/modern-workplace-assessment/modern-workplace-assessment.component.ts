import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-modern-workplace-assessment',
  templateUrl: './modern-workplace-assessment.component.html',
  styleUrls: ['./modern-workplace-assessment.component.css']
})
export class ModernWorkplaceAssessmentComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Empower Your Workplace: Modernization Services by UnifyCloud India');
    this.meta.addTag({name:'description',content:"Unlock the full potential of a modern workplace with UnifyCloud India's comprehensive assessment services and accelerate your organization's journey towards digital success."});
    this.meta.addTag({name:'keywords',content:'modern workplace modernization'});
  }
}
