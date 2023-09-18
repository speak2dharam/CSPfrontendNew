import { Component } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent {
  constructor(
    private wishSrc:WishlistService,
    private toastr: ToastrService,
  ){}
}
