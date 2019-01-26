import { Component, OnInit, OnDestroy} from '@angular/core';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { TodoService } from '../shared/todo.service';
import { OneToDo } from '../shared/onetodo.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})



export class TodoComponent implements OnInit, OnDestroy {
private toDoThings: any[];
subscriptionDel:Subscription;
i:number = 0;
  
constructor(private todoService: TodoService) { }

  ngOnInit() {

    this.subscriptionDel = this.todoService.listDeleted
    .subscribe(
      (id:number)=>{
        const arr:any[] = this.toDoThings
        arr.forEach((item, index) => {
         if(item.id == id) {
          arr.splice(index,1); 
         }
          
      });
        }
    )

    this.todoService.getList().subscribe(
      (response:Response)=>{
        this.toDoThings = response.json().todos
        console.log( this.toDoThings);

      }
    )
  }

  onAddThing(form:NgForm){
    this.todoService.createItem(form.value.newItem).subscribe(
      (response:Response)=>{
        const res:{id:number} = response.json()
        console.log(res.id);
        const newItem = new OneToDo(res.id,form.value.newItem, false )
        this.toDoThings.push(newItem)
        form.reset()
      }
    )
    
  }
  ngOnDestroy(){
    this.subscriptionDel.unsubscribe()
  }
}

