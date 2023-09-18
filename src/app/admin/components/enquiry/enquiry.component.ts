import { Component,ViewChild ,OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/services/enquiry.service';
import { EnquirySingleComponent } from './enquiry-single/enquiry-single.component';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  EID: number = 0;
  constructor(private enqsrc:EnquiryService){}
  public enqries:any=[];
  CountEnq:string="";
  ngOnInit(){
    this.BindAllEnq();
  }
  BindAllEnq(){
    this.enqsrc.getEnquiry({
      "EID":0,
      "Action":2
    }).subscribe(res=>{
      this.enqries=res;
      this.CountEnq=this.enqries.length
      //alert(this.enqries.length)
      //console.log(res)
    })
  }
  // View Single Enquiry
  SingleEnquary(GetEID:number) {
    this.EID=GetEID;
    console.log(GetEID);
  }
  
  @ViewChild(EnquirySingleComponent) childComponent: EnquirySingleComponent | undefined;

  callChildFunction(GetEID:number) {
    this.EID=GetEID;
    if (this.childComponent) {
      this.childComponent.childFunction(this.EID);
      this.BindAllEnq();
    }
  }
}
