import {Injectable} from '@angular/core';
import {Todo} from '../../models/todo';
import {ModalController} from '@ionic/angular';
import {User} from '../../models/user';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos: Todo[] = [];
    erledigt: Todo[] = [];

    constructor(private modalCtrl: ModalController) {

        const lsTodos = localStorage.getItem('todos');
        const lsDone = localStorage.getItem('done');

        if (lsTodos){
            this.todos = JSON.parse(lsTodos);
        }
        if (lsDone){
            this.erledigt = JSON.parse(lsDone);
        }
    }

    setLS(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
        localStorage.setItem('done', JSON.stringify(this.erledigt));
    }

    async add(todo: Todo, autor: User) {
        if (todo.titel && todo.beschreibung) {
            todo.id = this.todos.length;
            todo.autor = autor;
            todo.zeit = new Date().getHours() + ':' + new Date().getMinutes();
            await this.todos.push(todo);
            this.setLS();
            await this.modalCtrl.dismiss();
        } else {
            alert('du hund');
        }
    }

    async edit(todo: Todo) {
        if (todo.titel && todo.beschreibung) {
            this.todos.find(todoAusArray => todoAusArray.id === todo.id).titel = todo.titel;
            this.todos.find(todoAusArray => todoAusArray.id === todo.id).beschreibung = todo.beschreibung;
            this.setLS();
            await this.modalCtrl.dismiss();
        }
    }

    async delete(todo: Todo) {
        this.todos.splice(todo.id, 1);
        this.setLS();
    }

    async done(todo: Todo) {
        todo.erledigt = true;
        this.todos.splice(todo.id, 1);
        this.erledigt.push(todo);
        this.setLS();
    }

    async notDone(todo: Todo) {
        todo.erledigt = false;
        this.erledigt.splice(todo.id, 1);
        this.todos.push(todo);
        this.setLS();
    }
}
