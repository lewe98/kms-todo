import {Injectable} from '@angular/core';
import {Todo} from '../../models/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos: Todo[] = [];

    constructor() {
    }
}
