import {Component, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {TodoService} from '../../services/todo/todo.service';
import {Todo} from '../../models/todo';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage {

    todo: Todo = new Todo();
    @Input() autor: string;

    constructor(private todoService: TodoService,
                private modalCtrl: ModalController) {
    }

    async add() {
        if (this.todo.titel && this.todo.beschreibung){
            // this.todo.autor.nutzername = await this.autor;
            this.todo.zeit = new Date().getHours() + ':' + new Date().getMinutes();
            await this.todoService.todos.push(this.todo);
            await this.modalCtrl.dismiss();
        } else {
            alert('du hund');
        }

    }

}
