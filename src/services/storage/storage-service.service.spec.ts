import { TestBed } from '@angular/core/testing';

import { StorageServiceService } from './storage-service.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../auth/auth.service';

describe('StorageServiceService', () => {
  let service: StorageServiceService;
  const spy = jasmine.createSpyObj('AuthService', ['signUp', 'signIn', 'getUser', 'logOut']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{provide: AuthService, useValue: spy}]
    });
    service = TestBed.inject(StorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
