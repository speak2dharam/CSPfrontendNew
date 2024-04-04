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

    this.meta.addTag({ property: 'og:locale', content: 'en_US' });
    this.meta.addTag({ property: 'og:type', content: 'website' });
    this.meta.addTag({ property: 'og:title', content: 'Building a Responsible AI Implementation Framework for Generative AI' });
    this.meta.addTag({ property: 'og:description', content: 'Discover a comprehensive Responsible AI Implementation Framework tailored for Generative AI, ensuring ethical algorithms, transparent decision-making, and sustainable AI outcomes. Learn key strategies and best practices for deploying responsible AI in your organization.' });
    this.meta.addTag({ property: 'og:url', content: 'https://www.unifycloud.in/assessments/responsible-ai-assessment-services' });
    this.meta.addTag({ property: 'og:site_name', content: 'Building a Responsible AI Implementation Framework for Generative AI' });
    this.meta.addTag({ property: 'og:image', content: 'https://www.unifycloud.in/assets/img/res-AI-og.jpg' });
    this.meta.addTag({ property: 'og:image:width', content: '500' });
    this.meta.addTag({ property: 'og:image:height', content: '300' });
    this.meta.addTag({ property: 'og:image:alt', content: 'Responsible AI Assessment' });

    this.meta.addTag({ property: 'twitter:card', content: 'summary' });
    this.meta.addTag({ property: 'twitter:description', content: 'Discover a comprehensive Responsible AI Implementation Framework tailored for Generative AI, ensuring ethical algorithms, transparent decision-making, and sustainable AI outcomes. Learn key strategies and best practices for deploying responsible AI in your organization.' });
    this.meta.addTag({ property: 'twitter:title', content: 'Building a Responsible AI Implementation Framework for Generative AI' });
    this.meta.addTag({ property: 'twitter:site', content: '@unifycloudin' });
    this.meta.addTag({ property: 'twitter:image', content: 'https://www.unifycloud.in/assets/img/unifycloudlogo.svg' });
    this.meta.addTag({ property: 'twitter:creator', content: '@unifycloudin' });

  }
}
