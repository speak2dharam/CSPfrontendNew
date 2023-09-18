import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Output() sideBarToggled=new EventEmitter<boolean>();
  menuStatus:boolean=false;
  public fullName:string='';
  public expiryTime:string='';
  constructor(private auth:AuthService,private userstore:UserStoreService){}
  ngOnInit(){
    this.userstore.getfullNameFromStore().subscribe(val=>{
      let fullNamefromToken=this.auth.getfullNamefromToken();
      this.fullName=val||fullNamefromToken;
    })

    this.userstore.getexpiryDateFromStrore().subscribe(val=>{
      let expirytimefromToken=this.auth.getexpirytimefromToken();
      this.expiryTime=val||expirytimefromToken;
      //console.log(this.expiryTime=val||expirytimefromToken)
    })

    if(this.auth.isTokenExpired()){
      this.auth.logout();
    }
    //console.log(this.auth.getUserType())
  }
  logout(){
    this.auth.logout();
  }
  sideBarToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideBarToggled.emit(this.menuStatus);
  }
}
