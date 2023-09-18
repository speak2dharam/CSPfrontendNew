import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

const routes: Routes = [
  { path: '', component: UserComponent,
    children:[
      {path:'my-products',component:MyProductsComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'shop-cart',component:ShopCartComponent},
      {path:'checkout/:slug',component:CheckoutComponent},
      {path:'order-confirmation/:orderID',component:OrderConfirmationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
