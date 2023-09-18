import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddBillingAddressComponent } from './components/add-billing-address/add-billing-address.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';


@NgModule({
  declarations: [
    UserComponent,
    MyProductsComponent,
    WishlistComponent,
    ShopCartComponent,
    CheckoutComponent,
    AddBillingAddressComponent,
    OrderConfirmationComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    DecimalPipe
  ]
})
export class UserModule { }
