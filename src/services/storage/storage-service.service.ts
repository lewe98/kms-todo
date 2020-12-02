import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Todo} from '../../models/todo';
import {Kategorie} from '../../models/kategorie';

@Injectable({
    providedIn: 'root'
})
export class StorageServiceService {
    constructor(private authService: AuthService) {
    }

    static parsObjectArrayToString<T>(object: T[]): string[] {
        const back = [];
        object.map(e => {
            back.push(JSON.stringify(e));
        });
        return back;
    }

    static parsStringToObjectArray<T>(object: string[]): T[] {
        const back: T[] = [];
        object.map(e => {
            back.push(JSON.parse(e));
        });
        return back;
    }

    /***
     * CRUD - Kategorien
     */
    getCategories(): Kategorie[] {
        if (this.authService.isLoggedIn) {
            return this.getCategoriesFirebase();
        } else {
            return this.getCategoriesLocalStorage();
        }
    }

  addCategorie(cat: Kategorie) {
    if (this.authService.isLoggedIn) {
      this.addCategorieFirebase(cat);
    } else {
      this.addCategorieLocalStorage(cat);
    }
  }

  deleteCategorie(cat: Kategorie) {
    if (this.authService.isLoggedIn) {
      this.deleteCategorieFirebase(cat);
    } else {
      this.deleteCategorieLocalStorage(cat);
    }
  }

    /***
     * CRUD - Todos
     */

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
     * Firabase
     */
    importToFirebase(todos: Todo[]) {
        todos.forEach(todo => {
            this.addTodoFirebase(todo);
        });
    }

    /***
     * Local Storage
     */
    private updateTodosLocalstorage(todos: Todo[]) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    private updateCategoriesLocalstorage(cats: Kategorie[]) {
        localStorage.setItem('cats', JSON.stringify(cats));
    }

    private getTodosLocalStorage(): Todo[] {
        const todos: Todo[] = JSON.parse(localStorage.getItem('todos'));
        if (todos !== null) {
            return todos;
        } else {
            return [];
        }
    }

  private getCategoriesLocalStorage(): Kategorie[] {
        const cats: Kategorie[] = JSON.parse(localStorage.getItem('cats'));
        if (cats !== null) {
            return cats;
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

    private addCategorieLocalStorage(cat: Kategorie) {
        const cats: Kategorie[] = this.getCategoriesLocalStorage();
        if (cats) {
            cats.push(cat);
            this.updateCategoriesLocalstorage(cats);
        } else {
            cats.push(new Kategorie('0', 'nicht kategorisiert'));
            cats.push(cat);
            this.updateCategoriesLocalstorage(cats);
        }
    }

    /*private updateCategorieLocalstorage(cat: Kategorie) {
      const cats = this.getCategoriesLocalStorage();
      const newCats = cats.map(c => {
        if (c.id === cat.id) {
          return c = cat;
        } else {
          return c;
        }
      });
      this.updateCategoriesLocalstorage(newCats);
    }*/

    private updateTodoLocalStorage(todo: Todo) {
        const todos = this.getTodosLocalStorage();
        const newTodos = todos.map(t => {
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

  private deleteCategorieLocalStorage(cat: Kategorie) {
    const cats = this.getCategoriesLocalStorage();
    cats.splice(cats.indexOf(cat), 1);
    this.updateCategoriesLocalstorage(cats);
  }

    private getTodosFirebase(): Todo[] {
        return StorageServiceService.parsStringToObjectArray<Todo>(this.authService.getUser().todos);
    }

    private getCategoriesFirebase(): Kategorie[] {
        return StorageServiceService.parsStringToObjectArray<Kategorie>(this.authService.getUser().kategorien);
    }

    private addTodoFirebase(todo: Todo) {
        const user = this.authService.getUser();
        user.todos.push(JSON.stringify(todo));
        this.authService.updateUser(user);
    }

  private addCategorieFirebase(cat: Kategorie) {
    const user = this.authService.getUser();
    user.kategorien.push(JSON.stringify(cat));
    this.authService.updateUser(user);
  }

    private updateTodoFirebase(todo: Todo) {
        const user = this.authService.getUser();
        const todos = StorageServiceService.parsStringToObjectArray<Todo>(user.todos);
        user.todos = StorageServiceService.parsObjectArrayToString<Todo>(
            todos.map(t => {
                if (t.id === todo.id) {
                    return t = todo;
                } else {
                    return t;
                }
            })
        );
        this.authService.updateUser(user);
    }

    private deleteTodoFirebase(todo: Todo) {
        const user = this.authService.getUser();
        user.todos.splice(user.todos.indexOf(JSON.stringify(todo)), 1);
        this.authService.updateUser(user);
    }

  private deleteCategorieFirebase(cat: Kategorie) {
    const user = this.authService.getUser();
    user.kategorien.splice(user.kategorien.indexOf(JSON.stringify(cat)), 1);
    this.authService.updateUser(user);
  }

}
