import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import {RouterTestingModule} from '@angular/router/testing';
// import {ModalController} from '@ionic/angular';
import {StorageServiceService} from '../storage/storage-service.service';
import {AuthService} from '../auth/auth.service';
import {ModalController} from '@ionic/angular';

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
});
