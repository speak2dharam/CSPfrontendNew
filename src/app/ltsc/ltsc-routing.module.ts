import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LTSCComponent } from './ltsc.component';
import { LtscPageComponent } from './components/ltsc-page/ltsc-page.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CategorizeItemsComponent } from './components/categorize-items/categorize-items.component';

const routes: Routes = [
  { path: '', component: LTSCComponent ,
    children:[
      {path:'',component:LtscPageComponent},
      {path:'c/:slug',component:CategorizeItemsComponent},
      {path:'item/:slug',component:ItemDetailComponent},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LTSCRoutingModule { }
