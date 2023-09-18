import { Component,OnInit } from '@angular/core';
import { LtscProductsService } from 'src/app/services/ltsc-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private ltscSrvc:LtscProductsService){}
  ngOnInit():void{
    this.BindProduct();
  }
  public ProdOutput:any=[];
  BindProduct(){
    this.ltscSrvc.GetProducts({
      "PID": 0,
      "ProductID": "",
      "Action": 1
    }).subscribe(res=>{
      this.ProdOutput=res;
      console.log(this.ProdOutput)
    })
  }
}
