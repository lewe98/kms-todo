import {Injectable} from '@angular/core';
import {Todo} from '../../models/todo';
import {LoadingController, ModalController, PopoverController} from '@ionic/angular';
import {User} from '../../models/user';
import {PopoverPriorityComponent} from '../../app/components/popover-priority/popover-priority.component';
import {kategorie} from '../../models/kategorie';
import {AuthService} from '../auth/auth.service';
import {StorageServiceService} from '../storage/storage-service.service';


@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos: Todo[] = [];
    categories: kategorie[] = [];

    constructor(private modalCtrl: ModalController,
                public popoverController: PopoverController,
                public storageService: StorageServiceService) {
        this.todos = this.storageService.getTodos();
    }

    async add(todo: Todo, autor: User) {
        if (todo.titel && todo.beschreibung) {
            todo.id = this.todos.length;
            todo.autor = autor;
            let minute = String(new Date().getMinutes());
            if (minute.length === 1) {
                minute = '0' + minute;
            }
            todo.zeit = new Date().getHours() + ':' + minute;
            await this.todos.push(todo);
            this.storageService.addTodo(todo);
            await this.modalCtrl.dismiss();
        } else {
            alert('du hund');
        }
    }

    /**
     * Reads FrontEnd form and creates new category, then
     * adds a category to the array categories in todoService
     * @param name name of the category
     */
    async addCategory(name: string) {
        if (name.length !== 0) {
            const id: string = (this.categories.length + 1).toString();
            console.log(this.categories);
            console.log(id);
            await this.categories.push(new kategorie((this.categories.length + 1).toString(), name));
            await this.modalCtrl.dismiss();
        } else {
            alert('Please enter a valid category name. ');
        }
    }

    async presentPopoverPriority(ev: any, toto: Todo) {
        const popover = await this.popoverController.create({
            component: PopoverPriorityComponent,
            event: ev,
            translucent: true,
            componentProps: {
                toto
            }
        });
        return await popover.present();
    }

    /***
     * This method changes the priority of a toto 0 is the lowest
     * @param toto is the to Set toto
     * @param i is the priority
     */
    setPriority(toto: Todo, i: number) {
        const index = this.todos.indexOf(toto);
        toto.prioritaet = i;
        this.todos[index] = toto;
        this.storageService.updateTodo(toto);
    }

    async edit(todo: Todo) {
        if (todo.titel && todo.beschreibung) {
            this.todos.find(todoAusArray => todoAusArray.id === todo.id).titel = todo.titel;
            this.todos.find(todoAusArray => todoAusArray.id === todo.id).beschreibung = todo.beschreibung;
            this.storageService.updateTodo(todo);
            await this.modalCtrl.dismiss();
        }
    }

    async delete(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.storageService.deleteTodo(todo);
    }

    async done(todo: Todo) {
        this.todos[this.todos.indexOf(todo)].erledigt = true;
        this.storageService.updateTodo(todo);
    }

    async notDone(todo: Todo) {
        this.todos[this.todos.indexOf(todo)].erledigt = false;
        this.storageService.updateTodo(todo);
    }
}
