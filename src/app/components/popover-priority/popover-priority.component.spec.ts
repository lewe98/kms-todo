import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoverPriorityComponent } from './popover-priority.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../../services/auth/auth.service';

describe('PopoverPriorityComponent', () => {
  let component: PopoverPriorityComponent;
  let fixture: ComponentFixture<PopoverPriorityComponent>;
  const authSpy = jasmine.createSpyObj('AuthService', ['signUp', 'signIn', 'getUser', 'logOut']);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverPriorityComponent ],
      imports: [
          IonicModule.forRoot(),
        RouterTestingModule],
      providers: [
        {provide: AuthService, useValue: authSpy},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
