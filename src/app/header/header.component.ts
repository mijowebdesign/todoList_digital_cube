import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSignout(){
    this.authService.signoutUser().subscribe(
      (response:Response)=>{
        console.log(response );
        if(response.status == 204){
          localStorage.setItem('token', '');
          this.router.navigate(['/signup'])

        }
      }
    )
    
  }

}
