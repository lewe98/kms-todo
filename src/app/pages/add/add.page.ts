import {Component, Input} from '@angular/core';
import {TodoService} from '../../../services/todo/todo.service';
import {Todo} from '../../../models/todo';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage {

    @Input() todo: Todo;
    @Input() autor: string;
    @Input() edit: boolean;

    constructor(public todoService: TodoService) {
    }

}
