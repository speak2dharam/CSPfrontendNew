import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-five-rmigration-planning',
  templateUrl: './five-rmigration-planning.component.html',
  styleUrls: ['./five-rmigration-planning.component.css']
})
export class FiveRMigrationPlanningComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Optimizing Migration Efforts: Unleashing the Power of 5R Wave Planning Assessment with UnifyCloud India');
    this.meta.addTag({name:'description',content:'Unlock the full potential of your migration project with our comprehensive guide on 5R Wave Planning Assessment. Streamline your migration efforts and achieve seamless transitions with strategic planning and optimization strategies.'});
    this.meta.addTag({name:'keywords',content:''});
  }
}
