import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-openai',
  templateUrl: './openai.component.html',
  styleUrls: ['./openai.component.css']
})
export class OpenaiComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Open AI');
    this.meta.addTag({name:'description',content:'Buy Open AI License'});
    this.meta.addTag({name:'keywords',content:'open ai, ai'});
  }
}
