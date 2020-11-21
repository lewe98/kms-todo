import {Injectable} from '@angular/core';
import {Todo} from '../../models/todo';
import {ModalController, PopoverController} from '@ionic/angular';
import {User} from '../../models/user';
import {AuthService} from '../auth/auth.service';
import {PopoverPriorityComponent} from '../../app/components/popover-priority/popover-priority.component';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos: Todo[] = [];

    constructor(private modalCtrl: ModalController,
                public popoverController: PopoverController) {
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

    async presentPopover(ev: any, toto: Todo) {
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
        // TODO: Update Todo in Firebase
    }
}
