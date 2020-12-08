import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoverCategoryPage } from './popover-category.page';
import {RouterTestingModule} from '@angular/router/testing';

describe('PopoverCategoryPage', () => {
  let component: PopoverCategoryPage;
  let fixture: ComponentFixture<PopoverCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverCategoryPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
