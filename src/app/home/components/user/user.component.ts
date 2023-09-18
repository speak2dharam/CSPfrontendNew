import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private authSrv:AuthService, private router:Router){}
  ngOnInit(): void {
    if(!this.authSrv.IsLoggedIn()){
      this.router.navigate(['/'])
    }
  }
}
