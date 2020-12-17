import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPage } from './add.page';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';

describe('AddPage', () => {
  let component: AddPage;
  let fixture: ComponentFixture<AddPage>;
  const authSpy = jasmine.createSpyObj('AuthService', ['signUp', 'signIn', 'getUser', 'logOut']);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, FormsModule],
      providers: [
        {provide: AuthService, useValue: authSpy},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
