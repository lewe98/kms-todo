import {Injectable} from '@angular/core';
import {Todo} from '../../models/todo';
import {ModalController} from '@ionic/angular';
import {User} from '../../models/user';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos: Todo[] = [];

    constructor(private modalCtrl: ModalController) {
    }

    async add(todo: Todo, autor: User) {
        if (todo.titel && todo.beschreibung) {
            todo.autor = autor;
            todo.zeit = new Date().getHours() + ':' + new Date().getMinutes();
            await this.todos.push(todo);
            await this.modalCtrl.dismiss();
        } else {
            alert('du hund');
        }
    }

    async edit(todo: Todo) {
        if (todo.titel && todo.beschreibung) {
            this.todos.find(todoAusArray => todoAusArray.id === todo.id).titel = todo.titel;
            this.todos.find(todoAusArray => todoAusArray.id === todo.id).beschreibung = todo.beschreibung;
            await this.modalCtrl.dismiss();
        }
    }
}
