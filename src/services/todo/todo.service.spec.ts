import {TestBed} from '@angular/core/testing';

import {TodoService} from './todo.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../auth/auth.service';
import {ModalController} from '@ionic/angular';
import {Todo} from '../../models/todo';
import {Kategorie} from '../../models/kategorie';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {User} from '../../models/user';

describe('TodoService', () => {
    let service: TodoService;
    const authSpy = jasmine.createSpyObj('AuthService', ['signUp', 'signIn', 'getUser', 'logOut']);
    const modalSpy = jasmine.createSpyObj('ModalController', ['dismiss']);
    // Testdaten erstellen
    const task: Todo = new Todo();
    task.titel = 'testTitle';
    task.beschreibung = 'testDescription';

    const storageSpy = jasmine.createSpyObj('StorageService', {getTodos: 'getTodos'});
    storageSpy.getTodos.and.returnValue([task]);

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFirestoreModule,
                AngularFireAuthModule],
            providers: [
                TodoService,
                {provide: AuthService, useValue: authSpy},
                // {provide: AlertController, useValue: alertSpy},
                {provide: ModalController, useValue: modalSpy}]
        }).compileComponents();
        service = TestBed.inject(TodoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should update the category of a todo', () => {
        const oldCategorie = new Kategorie('oldVal', 'oldVal');
        const newCategorie = new Kategorie('newVal', 'newVal');

        task.kategorie = oldCategorie;
        service.setCategory(task, newCategorie);

        expect(task.kategorie).toBe(newCategorie);
    });

    // todo
    it('should update a todo', () => {
        task.id = 0;
        task.id = 1;
        service.edit(task);
        expect(task.id).toBe(1);
    });

    it('should delete a todo', () => {
        service.todos = [];
        service.add(task, new User('test@test.de', 'test', 'test'), 'test');
        expect(service.todos.length).toBe(1);
        service.delete(task);
        expect(service.todos.length).toBe(0);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should should create a todo', () => {
        service.add(task, new User('test@test', 'test', 'test'), 'test');
        const index: number = service.todos.indexOf(task);
        expect(service.todos[index]).toBe(task);
    });

    it('should add a new category to categories array', () => {
        const catname = 'testen';
        service.addCategory(catname);
        const index: number = service.categories.length - 1;
        expect(service.categories[index]).toEqual({id: index.toString(), name: 'testen'});
    });

    it('should get a category by its name', () => {
        const catname = 'testen';
        const gotCat: Kategorie = service.getCatByName(catname);
        expect(gotCat.name).toEqual(catname);
    });

    it('should set the priority of the given task', () => {
        service.add(task, new User('test@test', 'test', 'test'), 'test');
        const i = service.todos.indexOf(task);
        service.setPriority(task, 2);
        expect(service.todos[i]).toEqual(task);
    });

    it('should set the category for the given task', () => {
        const catID = service.categories.length.toString();
        const cat = new Kategorie(catID, 'testKategorie');
        service.setCategory(task, cat);
        expect(task.kategorie).toEqual(cat);
    });

    it('should should delete a category', () => {
        const catname = 'testname';
        service.addCategory(catname);
        const testCat: Kategorie = service.getCatByName(catname);
        service.deleteCategorie(testCat);
        let foundCat: boolean;
        for (const cat of service.categories) {
            foundCat = cat === testCat;
        }
        expect(foundCat).toBeFalse();
    });

    it('should  should set status of given task true', () => {
        service.done(task);
        expect(task.erledigt).toBe(true);
    });

    it('should shoud set status of given task to be false', () => {
        service.notDone(task);
        expect(task.erledigt).toBe(false);
    });

    afterAll(() => {
        service.filteredAufgabenArray = [];
        service.todos = [];
        service.categories = [];
        service.catname = '';
    });
});
