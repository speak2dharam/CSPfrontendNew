import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { LTSCRoutingModule } from './ltsc-routing.module';
import { LTSCComponent } from './ltsc.component';
import { LtscPageComponent } from './components/ltsc-page/ltsc-page.component';
import { HomeModule } from '../home/home.module';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CategorizeItemsComponent } from './components/categorize-items/categorize-items.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    LTSCComponent,
    LtscPageComponent,
    ItemDetailComponent,
    CategorizeItemsComponent
  ],
  imports: [
    CommonModule,
    LTSCRoutingModule,
    HomeModule,
    FormsModule,
    MatSliderModule
  ],
  providers:[
    DecimalPipe
  ]
})
export class LTSCModule { }
