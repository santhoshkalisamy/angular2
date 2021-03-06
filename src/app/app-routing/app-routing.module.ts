import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

const appRouts : Routes = [
  {
    path:'list',
    component:TodoListComponent,
  },
  {
    path:'add',
    component:AddTodoComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouts)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
