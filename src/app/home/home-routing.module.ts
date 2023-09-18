import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BecomesellerComponent } from './components/becomeseller/becomeseller.component';
import { CancellationComponent } from './components/cancellation/cancellation.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { TermsconditionComponent } from './components/termscondition/termscondition.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children:[
      {path:'',component:HomepageComponent},
      {path:'about-us',component:AboutusComponent},
      {path:'assessments', loadChildren: () => import('./components/assessments/assessments.module').then(m => m.AssessmentsModule) },
      {path:'lets-talk', loadChildren: () => import('./components/enquiry/enquiry.module').then(m => m.EnquiryModule) },
      {path:'become-seller',component:BecomesellerComponent},
      {path:'cancellation-policy',component:CancellationComponent},
      {path:'career',component:CareerComponent},
      {path:'contact',component:ContactComponent},
      {path:'our-customers',component:CustomersComponent},
      {path:'privacy-policy',component:PrivacypolicyComponent},
      {path:'terms-conditions',component:TermsconditionComponent},
      {path:'product-services', loadChildren: () => import('./components/product-services/product-services.module').then(m => m.ProductServicesModule) },
      {path:'faq',component:FaqComponent},
      { path:'user', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule) },

      // {path:'lets-talk',component:enq}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
