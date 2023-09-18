import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPagesRoutingModule } from './landing-pages-routing.module';
import { LandingPagesComponent } from './landing-pages.component';
import { AssessmentsComponent } from './pages/assessments/assessments.component';


@NgModule({
  declarations: [
    LandingPagesComponent,
    AssessmentsComponent
  ],
  imports: [
    CommonModule,
    LandingPagesRoutingModule
  ]
})
export class LandingPagesModule { }
