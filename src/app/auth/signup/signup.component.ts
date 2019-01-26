import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signin:boolean = false;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSignin(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email,password).subscribe(
      (response:Response)=>{
        const res = response.json()
        localStorage.setItem('token', res.token);
        this.router.navigate(['/todolist'])
        this.signin=true;
        
        
      }
    )
  }
}
