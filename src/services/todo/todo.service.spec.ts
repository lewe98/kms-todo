import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ModalController} from '@ionic/angular';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ModalController]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
