import {Component, Input} from '@angular/core';
import {TodoService} from '../../../services/todo/todo.service';
import {Todo} from '../../../models/todo';

@Component({
  selector: 'app-popover-category',
  templateUrl: './popover-category.page.html',
  styleUrls: ['./popover-category.page.scss'],
})
export class PopoverCategoryPage {
  @Input() task: Todo;

  constructor(public todoService: TodoService) { }

}
