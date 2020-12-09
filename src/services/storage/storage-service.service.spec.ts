import { TestBed } from '@angular/core/testing';

import { StorageServiceService } from './storage-service.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('StorageServiceService', () => {
  let service: StorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(StorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
