import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from "../../../services/todo/todo.service";
import {Todo} from "../../../models/todo";

@Component({
  selector: 'app-popover-category',
  templateUrl: './popover-category.page.html',
  styleUrls: ['./popover-category.page.scss'],
})
export class PopoverCategoryPage implements OnInit {
  @Input() task: Todo;


  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

}
