import {Injectable} from '@angular/core';
import {Todo} from '../../models/todo';
import {ModalController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos: Todo[] = [];

    constructor(private modalCtrl: ModalController) {
    }

    async add(todo: Todo) {
        if (todo.titel && todo.beschreibung) {
            // this.todo.autor.nutzername = await this.autor;
            todo.zeit = new Date().getHours() + ':' + new Date().getMinutes();
            await this.todos.push(todo);
            await this.modalCtrl.dismiss();
        } else {
            alert('du hund');
        }
    }
}
