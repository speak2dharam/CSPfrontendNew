import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-automated-landing-zone',
  templateUrl: './automated-landing-zone.component.html',
  styleUrls: ['./automated-landing-zone.component.css']
})
export class AutomatedLandingZoneComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Azure Landing Zone Assessments: Paving the Path to Success in the Cloud with UnifyCloud India');
    this.meta.addTag({name:'description',content:"Navigate the complexities of cloud adoption with confidence as our expert team evaluates your organization's readiness and designs a customized landing zone architecture."});
    this.meta.addTag({name:'keywords',content:''});
  }
  faq=[
    {
      Ques:`What is the purpose of an Azure Landing Zone Assessment? `,
      Ans:`The purpose of an Azure Landing Zone Assessment is to assess an organization's environment and
      recommend improvements to meet Azure Landing Zone best practices`
    },
    {
      Ques:` How long does an Azure Automated Landing Zone Assessment take? `,
      Ans:`An Azure Automated Landing Zone Assessment typically takes a few days and a week to complete.`
    },
    {
      Ques:`What is an Azure Automated Landing Zone Assessment cost from UnifyCloud?`,
      Ans:`The cost of an Azure Automated Landing Zone Assessment from UnifyCloud varies based on the size and
      complexity of an organization's environment. Contact UnifyCloud for a quote. `
    }
  ]
}
