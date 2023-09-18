import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sustainability-assessment',
  templateUrl: './sustainability-assessment.component.html',
  styleUrls: ['./sustainability-assessment.component.css']
})
export class SustainabilityAssessmentComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Empowering Sustainability: Building a Better Future for All with UnifyCloud in India');
    this.meta.addTag({name:'description',content:'Join us in the movement towards a better future by embracing sustainability. Discover innovative solutions and practical strategies to empower sustainability in your organization and beyond.'});
    this.meta.addTag({name:'keywords',content:''});
  }
}
