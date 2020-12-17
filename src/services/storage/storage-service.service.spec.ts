import { TestBed } from '@angular/core/testing';

import { StorageServiceService } from './storage-service.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../auth/auth.service';
import {Kategorie} from '../../models/kategorie';
import {Todo} from '../../models/todo';
import {User} from '../../models/user';

describe('StorageServiceService', () => {
  let service: StorageServiceService;

  const todo = new Todo();
  todo.titel = 'test';
  todo.beschreibung = 'test';
  const todoString = JSON.stringify(todo);
  const kategorie = new Kategorie('0', 'testKategorie');
  const kategorieString = JSON.stringify(kategorie);
  const user = new User('test@test', 'testname', 'testbild');
  user.todos = [todoString];
  user.kategorien = [kategorieString];

  const kategorie1 = new Kategorie('0', 'test1');
  const kategorie2 = new Kategorie('1', 'test2');
  const kategorieArray = [kategorie1, kategorie2];
  const kategorieArrayString = [JSON.stringify(kategorie1), JSON.stringify(kategorie2)];

  let isLoggedIn = true;
  let authSpy;
  let localSpy;

  localSpy = jasmine.createSpyObj('localStorage', ['getItem']);
  localSpy.getItem.and.returnValue(kategorieString);
  authSpy = jasmine.createSpyObj('AuthService', ['getUser'], {
    isLoggedIn
  });
  authSpy.getUser.and.returnValue(user);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{provide: AuthService, useValue: authSpy}]
    });
    service = TestBed.inject(StorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Check Parser', () => {
    it('Test parsObjectArrayToString', (done) => {
      expect(StorageServiceService.parsObjectArrayToString<Kategorie>(kategorieArray)).toEqual(kategorieArrayString);
      done();
    });
    it('Test parsStringToObjectArray', (done) => {
      const tmp: Kategorie[] = StorageServiceService.parsStringToObjectArray<Kategorie>(kategorieArrayString);
      expect(tmp[0].id && tmp[0].name).toEqual(kategorieArray[0].id && kategorieArray[0].name);
      done();
    });
  });

  isLoggedIn = true;
  describe('Test CRUD Kategorien Firebase', () => {
    it('Test getCategories() Firebase', (done) => {
      expect(JSON.stringify(service.getCategories())).toEqual(JSON.stringify([kategorie]));
      done();
    });
  });

  isLoggedIn = false;
  describe('Test CRUD Kategorien localstorage', () => {
    it('Test getCategories() LocalStorage', (done) => {
      expect(JSON.stringify(service.getCategories())).toEqual(JSON.stringify([kategorie]));
      done();
    });
  });
});
