import {TestBed} from '@angular/core/testing';

import {TodoService} from './todo.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../auth/auth.service';
import {ModalController} from '@ionic/angular';
import {Todo} from '../../models/todo';
import {Kategorie} from '../../models/kategorie';
import {User} from '../../models/user';

describe('TodoService', () => {
    let service: TodoService;
    const authSpy = jasmine.createSpyObj('AuthService', ['signUp', 'signIn', 'getUser', 'logOut']);
    const modalSpy = jasmine.createSpyObj('ModalController', ['dismiss']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                TodoService,
                {provide: AuthService, useValue: authSpy},
                {provide: ModalController, useValue: modalSpy}]
        });
        service = TestBed.inject(TodoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should update the category of a todo', () => {
        const task: Todo = new Todo();
        const oldCategorie = new Kategorie('oldVal', 'oldVal');
        const newCategorie = new Kategorie('newVal', 'newVal');

        task.kategorie = oldCategorie;
        service.setCategory(task, newCategorie);

        expect(task.kategorie).toBe(newCategorie);
    });

    // todo
    it('should update a todo', () => {
        const task: Todo = new Todo();
        task.id = 0;
        task.id = 1;
        service.edit(task);
        expect(task.id).toBe(1);
    });

    it('should delete a todo', () => {
        const task: Todo = new Todo();
        task.titel = 'testTitle';
        task.beschreibung = 'testDescription';
        service.add(task, new User('test@test.de', 'test', 'test'), 'test');
        expect(service.todos.length).toBe(1);
        service.delete(task);
        expect(service.todos.length).toBe(0);
    });
});
