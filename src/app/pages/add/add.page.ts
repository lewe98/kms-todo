import {Component, Input} from '@angular/core';
import {TodoService} from '../../../services/todo/todo.service';
import {Todo} from '../../../models/todo';
import {ModalController} from '@ionic/angular';
import {User} from '../../../models/user';
import {Kategorie} from '../../../models/kategorie';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage {

    @Input() todo: Todo = new Todo();
    @Input() autor: User;
    @Input() edit: boolean;
    @Input() category: Kategorie;
    @Input() name: string;

    picked = 'todo';


    constructor(public todoService: TodoService,
                public modalCtrl: ModalController) {
    }

    /**
     *
     * @param ev that is triggered when the segement of the button switches sides
     */
    segmentChanged(ev: any) {
        console.log('Segment changed', ev);
    }
}
