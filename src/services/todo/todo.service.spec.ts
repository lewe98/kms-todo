import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import {RouterTestingModule} from '@angular/router/testing';
// import {ModalController} from '@ionic/angular';
import {StorageServiceService} from '../storage/storage-service.service';

describe('TodoService', () => {
  let service: TodoService;
  let storageServiceSpy: jasmine.SpyObj<StorageServiceService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('StorageServiceService', ['getValue']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [TodoService,
        { provide: StorageServiceService, useValue: spy }]
    });
    service = TestBed.inject(TodoService);
    storageServiceSpy = TestBed.inject(StorageServiceService) as jasmine.SpyObj<StorageServiceService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
