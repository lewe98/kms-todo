import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {LoginPage} from './login.page';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../../../services/auth/auth.service';
import {FormsModule} from '@angular/forms';


describe('LoginPage', () => {
    let component: LoginPage;
    // @ts-ignore
    let fixture: ComponentFixture<LoginPage>;
    const authSpy = jasmine.createSpyObj('AuthService', ['signUp', 'signIn', 'getUser', 'logOut']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginPage],
            imports: [IonicModule.forRoot(), RouterTestingModule, FormsModule],
            providers: [
                {provide: AuthService, useValue: authSpy},
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
