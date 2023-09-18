import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LtscProductsService } from 'src/app/services/ltsc-products.service';

@Component({
  selector: 'app-categorize-items',
  templateUrl: './categorize-items.component.html',
  styleUrls: ['./categorize-items.component.css']
})
export class CategorizeItemsComponent implements OnInit {
  ItemSlug: string = ''; // Initialize with an empty string or any default value you prefer
  valueToSend: string = '';
  
  constructor(private route:ActivatedRoute,private ltsc:LtscProductsService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ItemSlug = params.get('slug') || ''; // Set the value from the parameter or use an empty string as fallback
      // Now you can use this.ItemSlug to fetch the details of the product from your data source and display them on the page.
      this.ltsc.setCategorySlug(this.ItemSlug);
      this.valueToSend=this.ItemSlug
      console.log(this.ItemSlug)
    });
  }
}
