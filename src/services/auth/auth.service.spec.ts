import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {PopoverController} from '@ionic/angular';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import firebase from 'firebase';
import User = firebase.User;

describe('AuthService', () => {
    let service: AuthService;
    let spy;
    const popoverSpy = jasmine.createSpyObj('PopoverController', ['dismiss']);
    const user = {user: {uid: 'test', photoURL: 'test'}};
    // const user = new User('lol', 'lol', 'lol');
    // const spy = jasmine.createSpyObj('AuthService', ['signUp', 'signIn', 'getUser', 'logOut']);

    beforeEach(() => {
        spy = jasmine.createSpyObj('AngularFireAuth',
            {
                createUserWithEmailAndPassword: 'createUserWithEmailAndPassword'
            });
        spy.createUserWithEmailAndPassword.and.returnValue(Promise.resolve(user));

        TestBed.configureTestingModule({
            imports: [RouterTestingModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFirestoreModule,
                AngularFireAuthModule
                /*IonicModule.forRoot(),
                RouterTestingModule,
            */
            ],
            providers: [
                {provide: PopoverController, useValue: popoverSpy},
                {provide: AngularFireAuth, useValue: spy}
            ]
        }).compileComponents();
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    /* describe('check type of user', () => {
         it('should be User', (done) => {
             expect(service.user).toBe(typeof User);
             done();
         });
     });*/

    describe('sign up', () => {
        it('should sign up', (done) => {
            service.signUp('test', 'test@test.de', 'test', () => {
                console.log(service.user);
                expect(service.user.nutzername).toBe('test');
                done();
            });
        });
    });
    /*
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
            });*/

});
