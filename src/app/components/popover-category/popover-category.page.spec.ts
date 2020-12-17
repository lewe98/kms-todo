import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoverCategoryPage } from './popover-category.page';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../../services/auth/auth.service';

describe('PopoverCategoryPage', () => {
  let component: PopoverCategoryPage;
  let fixture: ComponentFixture<PopoverCategoryPage>;
  const authSpy = jasmine.createSpyObj('AuthService', ['signUp', 'signIn', 'getUser', 'logOut']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverCategoryPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
          {provide: AuthService, useValue: authSpy},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
