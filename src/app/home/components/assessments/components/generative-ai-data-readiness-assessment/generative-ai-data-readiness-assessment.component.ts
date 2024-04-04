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

    this.meta.addTag({ property: 'og:locale', content: 'en_US' });
    this.meta.addTag({ property: 'og:type', content: 'website' });
    this.meta.addTag({ property: 'og:title', content: 'Generative AI Data Readiness Assessment Services - UnifyCloud' });
    this.meta.addTag({ property: 'og:description', content: `UnifyCloud's Generative AI Data Readiness Assessment evaluates your data's readiness for AI applications. Discover gaps, enhancements, and a roadmap for optimal data readiness.` });
    this.meta.addTag({ property: 'og:url', content: 'https://www.unifycloud.in/assessments/generative-ai-data-readiness-assessment' });
    this.meta.addTag({ property: 'og:site_name', content: 'Generative AI Data Readiness Assessment Services - UnifyCloud' });
    this.meta.addTag({ property: 'og:image', content: 'https://www.unifycloud.in/assets/img/gen-AI-og.jpg' });
    this.meta.addTag({ property: 'og:image:width', content: '500' });
    this.meta.addTag({ property: 'og:image:height', content: '300' });
    this.meta.addTag({ property: 'og:image:alt', content: 'Gen AI Data Readiness Assessment' });

    this.meta.addTag({ property: 'twitter:card', content: 'summary' });
    this.meta.addTag({ property: 'twitter:description', content: `UnifyCloud's Generative AI Data Readiness Assessment evaluates your data's readiness for AI applications. Discover gaps, enhancements, and a roadmap for optimal data readiness.` });
    this.meta.addTag({ property: 'twitter:title', content: 'Generative AI Data Readiness Assessment Services - UnifyCloud' });
    this.meta.addTag({ property: 'twitter:site', content: '@unifycloudin' });
    this.meta.addTag({ property: 'twitter:image', content: 'https://www.unifycloud.in/assets/img/unifycloudlogo.svg' });
    this.meta.addTag({ property: 'twitter:creator', content: '@unifycloudin' });
  }
}
