import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {LandingPage} from './landing.page';
import {RouterTestingModule} from '@angular/router/testing';

describe('LandingPage', () => {
    let component: LandingPage;
    let fixture: ComponentFixture<LandingPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LandingPage],
            imports: [IonicModule.forRoot(), RouterTestingModule]
        }).compileComponents();

        fixture = TestBed.createComponent(LandingPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
