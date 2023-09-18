import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductServicesComponent } from './product-services.component';
import { AzureComponent } from './components/azure/azure.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { MicrosoftteamsComponent } from './components/microsoftteams/microsoftteams.component';
import { MsprojectComponent } from './components/msproject/msproject.component';
import { OnedriveComponent } from './components/onedrive/onedrive.component';
import { SharePointComponent } from './components/share-point/share-point.component';
import { PowerAppsComponent } from './components/power-apps/power-apps.component';
import { WindowTenComponent } from './components/window-ten/window-ten.component';
import { MsTSfBusinessComponent } from './components/ms-tsf-business/ms-tsf-business.component';
import { WindowTsfEntComponent } from './components/window-tsf-ent/window-tsf-ent.component';
import { MsTSfBusinessAhbComponent } from './components/ms-tsf-business-ahb/ms-tsf-business-ahb.component';
import { PowerBIComponent } from './components/power-bi/power-bi.component';
import { MicrosofttsfComponent } from './components/microsofttsf/microsofttsf.component';
import { OfficetsfComponent } from './components/officetsf/officetsf.component';
import { ProductsComponent } from './components/products/products.component';
import { MicrosoftTsfHomeComponent } from './components/microsoft-tsf-home/microsoft-tsf-home.component';

const routes: Routes = [
  { path: '', component: ProductServicesComponent,
    children:[
      { path: '', component: ProductsComponent },
      { path: 'exchange', component: ExchangeComponent },
      { path: 'microsoft-teams', component: MicrosoftteamsComponent },
      { path: 'ms-projects', component: MsprojectComponent },
      { path: 'one-drive', component: OnedriveComponent },
      { path: 'share-point', component: SharePointComponent },
      { path: 'power-apps', component: PowerAppsComponent },
      { path: 'windows', component: WindowTenComponent },
      { path: 'window-365-business', component: MsTSfBusinessComponent },
      { path: 'windows-365-enterprises', component: WindowTsfEntComponent },
      { path: 'window-365-business-ahb', component: MsTSfBusinessAhbComponent },
      { path: 'power-bi', component: PowerBIComponent },
      { path: 'microsoft-365', component: MicrosofttsfComponent },
      { path: 'microsoft-365-for-home', component: MicrosoftTsfHomeComponent },
      { path: 'azure', component: AzureComponent },
      { path: 'office-365', component: OfficetsfComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductServicesRoutingModule { }
