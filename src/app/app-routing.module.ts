import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo/todo.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'/signup', pathMatch:'full'},
  {path:'todolist', component:TodoComponent},
  {path:'signup', component:SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
