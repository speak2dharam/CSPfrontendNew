import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-azure-open-ai',
  templateUrl: './azure-open-ai.component.html',
  styleUrls: ['./azure-open-ai.component.css']
})
export class AzureOpenAIComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('UnifyCloud Empower Your Applications with Azure OpenAI Service ');
    this.meta.addTag({name:'description',content:'Buy Open AI License'});
    this.meta.addTag({name:'keywords',content:'open ai, ai'});
  }
}
