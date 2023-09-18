import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public expiryTime:string='';
  constructor(private auth:AuthService,private userstore:UserStoreService,private router: Router){}
  ngOnInit(): void {
    //console.log("IsLoggedIn : "+this.auth.IsLoggedIn())
    
    //console.log("Get Access Token from local : "+!!localStorage.getItem('accessToken'))

    const tokenfromlocal=!!localStorage.getItem('accessToken')
   
    this.userstore.getexpiryDateFromStrore().subscribe(val=>{
      let expirytimefromToken=this.auth.getexpirytimefromToken();
      this.expiryTime=val||expirytimefromToken;
      //console.log("Expiry from User Store : "+this.expiryTime)
    })
    //console.log("Get Token : "+this.auth.getToken())
    //console.log("Token Expiry Time : "+this.auth.getexpirytimefromToken())
    const currentTime = new Date().getTime() / 1000;
    const now = Date.now();
    //console.log(currentTime)
    //console.log("Now : "+now/1000)
    // const DecodeToken=this.auth.decodedToken()
    // console.log(DecodeToken.exp)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }
  
}
