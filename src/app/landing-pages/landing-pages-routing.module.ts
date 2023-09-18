import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPagesComponent } from './landing-pages.component';
import { AssessmentsComponent } from './pages/assessments/assessments.component';

const routes: Routes = [{ path: '', component: LandingPagesComponent, 
  children:[
    {path:'assessments',component:AssessmentsComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPagesRoutingModule { }
