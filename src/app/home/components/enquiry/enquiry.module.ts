import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiryRoutingModule } from './enquiry-routing.module';
import { EnquiryComponent } from './enquiry.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { EnquiryService } from 'src/app/services/enquiry.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EnquiryComponent,
    EnquiryformComponent
  ],
  imports: [
    CommonModule,
    EnquiryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    EnquiryformComponent
  ],
  providers:[
    EnquiryService
  ]
})
export class EnquiryModule { }
