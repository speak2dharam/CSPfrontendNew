import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { LtscProductsService } from 'src/app/services/ltsc-products.service';

@Component({
  selector: 'app-add-item-descriptions',
  templateUrl: './add-item-descriptions.component.html',
  styleUrls: ['./add-item-descriptions.component.css']
})
export class AddItemDescriptionsComponent implements OnInit {
  public ProdAddOutput:any=[];
  public Isloading=false;
  public ItemFound=false;
  // selectedValues: { [key: number]: number } = {}; // To store selected values


  myForm: FormGroup;

  public ItemOverviewEditor = ClassicEditor;
  public ItemOvervieweditorContent = ''; // This will hold the content from the editor

  constructor(
    private ltsc:LtscProductsService,
    private formBuilder:FormBuilder
  ){
    this.myForm = this.formBuilder.group({
      ItemID: ['', Validators.required],
    });
  }
  get formControls() {
    return this.myForm.controls;
  }
  ngOnInit(): void {
    this.bindProductItems();
  }
  bindProductItems(){
    this.Isloading=true;
    const dataArray={
      "ItemSlug": "",
      "CategoryID": 0,
      "CategorySlug": "",
      "BillPlanID": "",
      "SegmentID":"",
      "MinPrice": 0,
      "MaxPrice": 0,
      "Discount":0
    }
    this.ltsc.getProductItems(dataArray).subscribe(res=>{
      this.ProdAddOutput=res;
      console.log(this.ProdAddOutput)
      if(this.ProdAddOutput.length>0){
        this.Isloading=false;
        this.ItemFound=true;
      }
      else{
        this.ItemFound=false;
        this.Isloading=false;
      }
    });
  }
  savedata(){
    // This method will be called when the save button is clicked
    console.log(this.ItemOvervieweditorContent); // Access the content here
  }
}
