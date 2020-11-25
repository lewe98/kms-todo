import {Component, Input} from '@angular/core';
import {Todo} from '../../../models/todo';

@Component({
    selector: 'app-popover-priority',
    templateUrl: './popover-priority.component.html',
    styleUrls: ['./popover-priority.component.scss'],
})
export class PopoverPriorityComponent {
    @Input() toto: Todo;

    constructor() {
    }

}
