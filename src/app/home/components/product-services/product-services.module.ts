import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductServicesRoutingModule } from './product-services-routing.module';
import { ProductServicesComponent } from './product-services.component';
import { AzureComponent } from './components/azure/azure.component';
import { EnquiryModule } from '../enquiry/enquiry.module';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { FormsModule } from '@angular/forms';
import { MicrosoftteamsComponent } from './components/microsoftteams/microsoftteams.component';
import { MicrosofttsfComponent } from './components/microsofttsf/microsofttsf.component';
import { MsprojectComponent } from './components/msproject/msproject.component';
import { OfficetsfComponent } from './components/officetsf/officetsf.component';
import { OnedriveComponent } from './components/onedrive/onedrive.component';
import { PowerAppsComponent } from './components/power-apps/power-apps.component';
import { PowerBIComponent } from './components/power-bi/power-bi.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharePointComponent } from './components/share-point/share-point.component';
import { MsTSfBusinessComponent } from './components/ms-tsf-business/ms-tsf-business.component';
import { MsTSfBusinessAhbComponent } from './components/ms-tsf-business-ahb/ms-tsf-business-ahb.component';
import { WindowTsfEntComponent } from './components/window-tsf-ent/window-tsf-ent.component';
import { WindowTenComponent } from './components/window-ten/window-ten.component';
import { ProductsComponent } from './components/products/products.component';
import { MicrosoftTsfHomeComponent } from './components/microsoft-tsf-home/microsoft-tsf-home.component';


@NgModule({
  declarations: [
    ProductServicesComponent,
    AzureComponent,
    ExchangeComponent,
    MicrosoftteamsComponent,
    MicrosofttsfComponent,
    MsprojectComponent,
    OfficetsfComponent,
    OnedriveComponent,
    PowerAppsComponent,
    PowerBIComponent,
    ProductListComponent,
    SharePointComponent,
    MsTSfBusinessComponent,
    MsTSfBusinessAhbComponent,
    WindowTsfEntComponent,
    WindowTenComponent,
    ProductsComponent,
    MicrosoftTsfHomeComponent
  ],
  imports: [
    CommonModule,
    ProductServicesRoutingModule,
    EnquiryModule,
    FormsModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductServicesModule { }
