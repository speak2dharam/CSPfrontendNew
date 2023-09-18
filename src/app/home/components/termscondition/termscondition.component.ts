import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-termscondition',
  templateUrl: './termscondition.component.html',
  styleUrls: ['./termscondition.component.css']
})
export class TermsconditionComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Terms and Conditions :: Unifycloud India');
    this.meta.addTag({name:'description',content:''});
    this.meta.addTag({name:'keywords',content:''});
  }
}
