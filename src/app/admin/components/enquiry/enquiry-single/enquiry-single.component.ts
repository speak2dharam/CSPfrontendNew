import { Component,Input  } from '@angular/core';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-enquiry-single',
  templateUrl: './enquiry-single.component.html',
  styleUrls: ['./enquiry-single.component.css']
})
export class EnquirySingleComponent {
  @Input() inputValue: any;
  isChecked = true;
  constructor(private enqsrc:EnquiryService){}
  public enqries:any=[];
  childFunction(GetEID:number) {
    //console.log('hello'+GetEID);
    this.enqsrc.getSingleEnquiry({
      "EID":GetEID,
      "Action":1
    }).subscribe(res=>{
      this.enqries=res;
      this.isChecked = false;
      //console.log(res)
    })
  }
}
