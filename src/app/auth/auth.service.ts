import { Injectable } from "@angular/core";
import { Http, Headers  } from "@angular/http";

@Injectable()
export class AuthService {

  constructor(private http:Http){}

    setOptions(){
        const headerDict = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'authorization': localStorage.getItem('token')
        }
        return {              
          headers: new Headers(headerDict), 
        };
       
    }

    signinUser(email: string, password: string){
       return  this.http.post( 'http://todo.digitalcube.rs/user/login?username='+email+'&password='+password, '')
    }

    signoutUser(){
        return  this.http.post( 'http://todo.digitalcube.rs/user/logout','' , this.setOptions())
     }

}