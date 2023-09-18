import { Component,OnInit } from '@angular/core';
import { AppSettingService } from 'src/app/services/app-setting.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { BehaviorSubject,Observable, of } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  fullName:string='';
  public expiryTime:string='';
  UserLoginStatus=false;
  showProductsSubMenu=false;
  wishlistCount$: Observable<number> = of(0); // Initialize with of(0)
  cartCount$: Observable<number> = of(0); // Initialize with of(0)
  public GetWishforCount:any;

  constructor(
    private userstore:UserStoreService,
    private auth:AuthService,
    private wishSrc:WishlistService,
    private cartSrv:CartService
    ){}
  ngOnInit(){
    this.UserLoginStatus=this.auth.IsLoggedIn();
    //this.fullName=this.auth.getfullNamefromToken()
    if(this.auth.IsLoggedIn()){
      this.wishlistCount$ = this.wishSrc.getWishlistCount();
      this.cartCount$ = this.cartSrv.getCartCount();
    }
    
    //this.loadWishlistCount(1);
  }
  
  logout(){
    this.auth.logout();
  }
  toggleDiv(): void {
    this.showProductsSubMenu = !this.showProductsSubMenu;
  }
  companyMenu=[
    {
      Name:'About UnifyCloud',
      Url:'/about-us'
    },
    {
      Name:'Contact',
      Url:'/contact'
    },
    {
      Name:'FAQs',
      Url:'/faq'
    }
  ]
}
