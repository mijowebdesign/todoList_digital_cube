
import { Subject } from "rxjs";
import { Http, Headers } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class TodoService {

    constructor(private http:Http){}
    
    listDeleted = new Subject<number>();

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


    getList(){
        return this.http.get('http://todo.digitalcube.rs/api/todos', this.setOptions());    
    }

    createItem(newThing:string){
        const body = {"content":newThing}
        return this.http.put('http://todo.digitalcube.rs/api/todos', body , this.setOptions());
    }


    markItem(id, body){
        return this.http.patch('http://todo.digitalcube.rs/api/todos/'+id, body, this.setOptions());
    }

    deleteItem(id){
        return this.http.delete('http://todo.digitalcube.rs/api/todos/'+id, this.setOptions());
    }

}