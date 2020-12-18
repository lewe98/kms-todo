import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {PopoverController} from '@ionic/angular';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";

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

    describe('sign up', async () => {
        it('Test isLoggedIn before Registration', (done) => {
            expect(service.isLoggedIn).toBeFalse();
            done();
        });
        it('Test User SignIn', (done) => {
            service.signUp('test', 'test@test.de', 'test', () => {
                console.log(service.user);
                expect(service.user.nutzername).toBe('test');
                expect(service.isLoggedIn).toBeTrue();
                done();
            });
        });
    });

});


