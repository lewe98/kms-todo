import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    todos: Todo[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
