import {TestBed} from '@angular/core/testing';

import {TodoService} from './todo.service';
import {RouterTestingModule} from '@angular/router/testing';
// import {ModalController} from '@ionic/angular';
import {StorageServiceService} from '../storage/storage-service.service';
import {AuthService} from '../auth/auth.service';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Todo} from "../../models/todo";
import {Kategorie} from "../../models/kategorie";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {User} from "../../models/user";
import {formatNumber} from "@angular/common";

describe('TodoService', () => {
    let service: TodoService;
    let spy;
    let minute = String(new Date().getMinutes());
    if (minute.length === 1) {
        minute = '0' + minute;
    }
    const authSpy = jasmine.createSpyObj('AuthService', ['signUp', 'signIn', 'getUser', 'logOut']);
    const modalSpy = jasmine.createSpyObj('ModalController', ['dismiss']);
    // const alertSpy = jasmine.createSpyObj('Alertcontroller', ['dismiss']);
    // const loadingSpy = jasmine.createSpyObj('LoadingController');
    // const popoverSpy = jasmine.createSpyObj('PopoverController', ['dismiss']);
    // const todo: Todo = {
    //     id: 0,
    //     titel: 'Klopapier kaufen',
    //     beschreibung: 'in Coronazeiten um Klopapier kämpfen',
    //     kategorie: {id: 'nicht kategorisiert', name: 'nicht kategorisiert'},
    //     autor: {
    //         id: 'test',
    //         email: 'test@test.de',
    //         nutzername: 'test',
    //         profilbild: 'test',
    //         todos: [],
    //         kategorien: [JSON.stringify(new Kategorie('0', 'nicht kategorisiert'))]
    //     },
    //     erledigt: false,
    //     prioritaet: 2,
    //     zeit: new Date().getHours() + ':' + minute,
    // };



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
                {provide: ModalController, useValue: modalSpy},]
        }).compileComponents();
        service = TestBed.inject(TodoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should should create a todo', function () {
        const task: Todo = new Todo();
        task.titel = 'testTitle';
        task.beschreibung = 'testDescription';
        service.add(task, new User('test@test', 'test', 'test'), 'test');
        expect(service.todos[0]).toBe(task);
    });

    it('should add a new category to categories array', function () {
        const catname: string = 'testen';
        service.addCategory(catname);
        const index: number = service.categories.length - 1;
        console.log(index);
        expect(service.categories[index]).toEqual({id : index.toString(), name: 'testen'});
    });

    it('should get a category by its name', function () {
        const catname: string = 'testname';
        const index: number = service.categories.length - 1;
        service.addCategory(catname);
        expect(service.getCatByName(catname)).toEqual({id : index.toString(), name: 'testname'});
    });

    it('should set the priority of the given task', function () {
        const task = new Todo();
        task.titel = 'testTitle';
        task.beschreibung = 'testDescription';
        service.add(task, new User('test@test', 'test', 'test'), 'test');
        const i = service.todos.indexOf(task);
        service.setPriority(task, 2);
        expect(service.todos[i]).toEqual(task);
    });

    it('should set the category for the given task', function () {
        const task = new Todo();
        task.titel = 'testTitle';
        task.beschreibung = 'testDescription';
        const catID: string = service.categories.length.toString();
        const cat = new Kategorie(catID, 'testKategorie');
        service.setCategory(task, cat);
        expect(task.kategorie).toEqual(cat);
    });

    it('should should delete a category', function () {
        const catname: string = 'testname';
        const index: number = service.categories.length - 1;
        service.addCategory(catname);
        const testCat: Kategorie = service.getCatByName(catname);
        service.deleteCategorie(testCat);
        let foundCat: boolean;
        for (const cat of service.categories) {
            if (cat === testCat) {
                foundCat = true;
            } else {
                foundCat = false;
            }
        }
        expect(foundCat).toBeFalse();
    });

    it('should  should set status of given task true', function () {
        const task = new Todo();
        task.titel = 'testTitle';
        task.beschreibung = 'testDescription';
        service.done(task);
        expect(task.erledigt).toBe(true);
    });

    it('should shoud set status of given task to be false', function () {
        const task = new Todo();
        task.titel = 'testTitle';
        task.beschreibung = 'testDescription';
        service.notDone(task);
        expect(task.erledigt).toBe(false);
    });

});
