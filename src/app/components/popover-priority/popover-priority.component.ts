import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../../../services/todo/todo.service';
import {Todo} from '../../../models/todo';

@Component({
  selector: 'app-popover-priority',
  templateUrl: './popover-priority.component.html',
  styleUrls: ['./popover-priority.component.scss'],
})
export class PopoverPriorityComponent implements OnInit {
  @Input() toto: Todo;

  constructor(public todoService: TodoService) { }

  ngOnInit() {}

}
