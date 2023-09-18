import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-microsoftteams',
  templateUrl: './microsoftteams.component.html',
  styleUrls: ['./microsoftteams.component.css']
})
export class MicrosoftteamsComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Buy Microsoft teams License online in India from Certified Partner ');
    this.meta.addTag({name:'description',content:'Buy Microsoft Teams Business & Enterprise plans at the most economical price in India from UnifyCloud, a Microsoft Gold partner cloud solution provider.'});
    this.meta.addTag({name:'keywords',content:'Microsoft Teams for Business'});
  }
}
