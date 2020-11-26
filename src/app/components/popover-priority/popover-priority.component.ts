import {Component, Input, Output} from '@angular/core';
import {Todo} from '../../../models/todo';
import {TodoService} from '../../../services/todo/todo.service';

@Component({
    selector: 'app-popover-priority',
    templateUrl: './popover-priority.component.html',
    styleUrls: ['./popover-priority.component.scss'],
})
export class PopoverPriorityComponent {
    @Input() toto: Todo;

    constructor(public todoService: TodoService) {
    }

}
