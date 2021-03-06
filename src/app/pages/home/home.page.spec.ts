import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../../services/auth/auth.service';
import {FormsModule} from '@angular/forms';


describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;
    const authSpy = jasmine.createSpyObj('AuthService', ['signUp', 'signIn', 'getUser', 'logOut']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [IonicModule.forRoot(), RouterTestingModule, FormsModule],
            providers: [
                {provide: AuthService, useValue: authSpy},
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
