import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AngularFireModule} from '@angular/fire';

describe('AuthService', () => {
    let service: AuthService;
    const spy = jasmine.createSpyObj('AuthService', ['signUp', 'signIn', 'getUser', 'logOut']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule, AngularFireModule],
            providers: [{provide: AuthService, useValue: spy}]
        }).compileComponents();
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('sign up', () => {
        it('should sign up', (done) => {
            service.signUp('jasmine', 'jasmine@karma.com', 'jasmine');
            expect(service.user.nutzername).toBe('jasmine');
            done();
        });
    });

    describe('log in', () => {
        it('should log in', (done) => {
            service.signIn('jasmine@karma.com', 'jasmine');
            expect(service.user.nutzername).toBe(typeof String);
            done();
        });
    });

    describe('get user', () => {
        it('should get user', (done) => {
            service.getUser();
            expect(service.user.nutzername).toBe(typeof String);
            done();
        });
    });

    describe('log out', () => {
        it('should log out', (done) => {
            service.logOut();
            expect(service.user.nutzername).toBe(typeof undefined);
            done();
        });
    });

});
