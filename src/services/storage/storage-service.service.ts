import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Todo} from '../../models/todo';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  constructor(private authService: AuthService) {}


  getTodos(): Todo[] {
    if (this.authService.isLoggedIn) {
      return this.getTodosFirebase();
    } else {
      return this.getTodosLocalStorage();
    }
  }
  addTodo(todo: Todo) {
    if (this.authService.isLoggedIn) {
      this.addTodoFirebase(todo);
    } else {
      this.addTodoLocalStorage(todo);
    }
  }
  updateTodo(todo: Todo) {
    if (this.authService.isLoggedIn) {
      this.updateTodoFirebase(todo);
    } else {
      this.updateTodoLocalStorage(todo);
    }
  }
  deleteTodo(todo: Todo) {
    if (this.authService.isLoggedIn) {
      this.deleteTodoFirebase(todo);
    } else {
      this.deleteTodoLocalStorage(todo);
    }
  }


  /***
   * Local Storage
   */
  private updateTodosLocalstorage(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  private getTodosLocalStorage(): Todo[] {
    const todos: Todo[] = JSON.parse(localStorage.getItem('todos'));
    if (todos !== null) {
      return todos;
    } else {
      return [];
    }
  }
  private addTodoLocalStorage(todo: Todo) {
    let todos: Todo[] = this.getTodosLocalStorage();
    if (todos) {
      todos.push(todo);
      this.updateTodosLocalstorage(todos);
    } else {
      todos = [];
      todos.push(todo);
      this.updateTodosLocalstorage(todos);
    }
  }
  private updateTodoLocalStorage(todo: Todo) {
    const todos = this.getTodosLocalStorage();
    const newTodos = todos.map( t => {
      if (t.id === todo.id) {
        return t = todo;
      } else {
        return t;
      }
    });
    this.updateTodosLocalstorage(newTodos);
  }
  private deleteTodoLocalStorage(todo: Todo) {
    const todos = this.getTodosLocalStorage();
    todos.splice(todos.indexOf(todo), 1);
    this.updateTodosLocalstorage(todos);
  }

  /***
   * Firabase
   */

  private getTodosFirebase(): Todo[] {
    return this.authService.getUser().todos;
  }
  private addTodoFirebase(todo: Todo) {
    const user = this.authService.getUser();
    user.todos.push(todo);
    this.authService.updateUser(user);
  }
  private updateTodoFirebase(todo: Todo) {
    const user = this.authService.getUser();
    const todos = user.todos;
    user.todos = todos.map( t => {
      if (t.id === todo.id) {
        return t = todo;
      } else {
        return t;
      }
    });
    this.authService.updateUser(user);
  }
  private deleteTodoFirebase(todo: Todo) {
    const user = this.authService.getUser();
    user.todos.splice(user.todos.indexOf(todo), 1);
    this.authService.updateUser(user);
  }
}
