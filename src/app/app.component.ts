import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todo = ''
  todos = []

  addTodo(){
    if(this.todo)
    this.todos.push(this.todo)
    this.todo = ''
  }

  DeleteTodo(index){
    console.log(index)
    this.todos.splice(index, 1);
  }
}
