import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';

import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {
@Input() todo:{id:number, created:string, content:string, done:boolean};
responseStatus: number;
mark:boolean = false;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.mark = this.todo.done

  }

  onDone(){
    const body = {"done" : true}
    this.todoService.markItem(this.todo.id, body)
    .subscribe(
      (response:Response)=>{
        if(response.status == 204){
          this.mark = true;
          console.log(this.mark);
        }  
      }
    )
  }

  onDel(){
    this.todoService.deleteItem(this.todo.id).subscribe(
      (response:Response)=>{
        this.responseStatus = response.status;
        console.log( this.responseStatus);
        if (this.responseStatus== 204) {
          this.todoService.listDeleted.next(this.todo.id)
        }
      }
    )
  }
}
