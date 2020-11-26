import {Injectable} from '@angular/core';
import {User} from '../../models/user';
import {Observable, Subscription} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {LoadingController, PopoverController} from '@ionic/angular';
import {Todo} from '../../models/todo';
import {PopoverPriorityComponent} from '../../app/components/popover-priority/popover-priority.component';
import {LoginPage} from '../../app/pages/auth/login/login.page';
import {TodoService} from '../todo/todo.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isLoggedIn = false;
    user: User;
    subUser: Subscription;
    userCollection: AngularFirestoreCollection<User>;
    loading = this.loadingController.create({
        message: 'Bitte warten...',
        duration: 1500
    });

    constructor(private router: Router,
                private afs: AngularFirestore,
                private afAuth: AngularFireAuth,
                public loadingController: LoadingController,
                public popoverController: PopoverController) {
        this.userCollection = afs.collection<User>('users');
    }

    /**
     * copy and prepare
     * @param user user to be edited
     */
    private static copyAndPrepare(user: User): User {
        const copy = {...user};
        delete copy.id;

        copy.nutzername = copy.nutzername || null;
        copy.profilbild = copy.profilbild || null;
        copy.todos = copy.todos || [];
        copy.kategorien = copy.kategorien || null;

        return copy;
    }

    async presentPopoverLogin(ev: any) {
        const popover = await this.popoverController.create({
            component: LoginPage,
            event: ev,
            translucent: true,
            componentProps: {}
        });
        return await popover.present();
    }

    /**
     * Method to persist the user's data in the database
     */
    persist(user: User, id: string) {
        this.userCollection.doc(id).set(AuthService.copyAndPrepare(user));
    }

    /**
     * Method to return the authenticated user
     * @return user current user
     */
    getUser(): User {
        return this.user;
    }

    /**
     * Method to find a user by id
     * @param id id of a user
     * @return Observable<User> user that was found
     */
    findById(id): Observable<User> {
        const changeAction = this.userCollection.doc<User>(id);
        return changeAction.snapshotChanges()
            .pipe(
                map(changes => {
                    const data = changes.payload.data();
                    if (data) {
                        data.id = id;
                    }
                    return {...data};
                }));
    }

    /**
     * Method to sign up a user
     * @param nutzername user's username
     * @param email user's email
     * @param passwort user's password
     */
    async signUp(nutzername: string, email: string, passwort: string) {
        await (await this.loading).present();
        await this.afAuth.createUserWithEmailAndPassword(email, passwort)
            .then(async res => {
                this.persist(new User(email, nutzername, res.user.photoURL), res.user.uid);
                this.subUser = this.findById(res.user.uid)
                    .subscribe(u => {
                        this.user = u;
                        this.isLoggedIn = true;
                    });
                localStorage.setItem('userID', res.user.uid);
                await this.router.navigate(['/home']);
            })
            .catch((error) => {
                alert(error);
            });
        await (await this.loading).onDidDismiss();
    }

    /**
     * Method to sign in a user
     * @param email user's email
     * @param password user's password
     */
    async signIn(email: string, password: string) {
        await (await this.loading).present();
        await this.afAuth.signInWithEmailAndPassword(email, password)
            .then(res => {
                localStorage.setItem('userID', res.user.uid);
                this.subUser = this.findById(res.user.uid)
                    .subscribe(async u => {
                        this.user = u;
                    });
            })
            .catch((error) => {
                alert(error);
            });
        await (await this.loading).onDidDismiss();
    }

    /**
     * Method to sign out a user and remove all of his/her data
     */
    async logOut() {
        if (this.subUser) {
            this.subUser.unsubscribe();
        }
        this.user = undefined;
        localStorage.clear();
        await this.afAuth.signOut();
        setTimeout(() => {
            this.isLoggedIn = false;
        }, 800);
    }

    /**
     * Method to update the user's data in the database
     * @param user user
     */
    async updateUser(user: User) {
        await this.userCollection.doc(user.id).update(AuthService.copyAndPrepare(user));
    }
}
