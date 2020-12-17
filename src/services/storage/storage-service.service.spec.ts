import { TestBed } from '@angular/core/testing';

import { StorageServiceService } from './storage-service.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../auth/auth.service';
import {Kategorie} from '../../models/kategorie';

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

  describe('Check Parser', async () => {
    const kategorie1 = new Kategorie('0', 'test1');
    const kategorie2 = new Kategorie('1', 'test2');
    const kategorieArray = [kategorie1, kategorie2];
    const kategorieArrayString = [JSON.stringify(kategorie1), JSON.stringify(kategorie2)];
    it('Test parsObjectArrayToString', (done) => {
      expect(StorageServiceService.parsObjectArrayToString<Kategorie>(kategorieArray)).toEqual(kategorieArrayString);
      done();
    });
    /*it('Test parsStringToObjectArray', (done) => {
      const tmp: Kategorie[] = StorageServiceService.parsStringToObjectArray<Kategorie>(kategorieArrayString);
      expect(tmp).toEqual(kategorieArray);
      done();
    });*/
  });
});
