import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BecomesellerComponent } from './components/becomeseller/becomeseller.component';
import { BecomeSellerFormComponent } from './components/become-seller-form/become-seller-form.component';
import { CancellationComponent } from './components/cancellation/cancellation.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerlistComponent } from './components/customers/customerlist/customerlist.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { TermsconditionComponent } from './components/termscondition/termscondition.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductServicesModule } from './components/product-services/product-services.module';
import { FaqComponent } from './components/faq/faq.component';
import { SubscribeService } from '../services/subscribe.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './header/menu/menu.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    BecomesellerComponent,
    BecomeSellerFormComponent,
    CancellationComponent,
    CareerComponent,
    ContactComponent,
    CustomersComponent,
    CustomerlistComponent,
    PrivacypolicyComponent,
    TermsconditionComponent,
    HomepageComponent,
    FaqComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductServicesModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers:[
    SubscribeService
  ]
})
export class HomeModule { }
