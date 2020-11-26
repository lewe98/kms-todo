import {Component, ViewChild} from '@angular/core';
import {IonInput, ViewDidEnter} from '@ionic/angular';
import {AuthService} from '../../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {TodoService} from '../../../../services/todo/todo.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements ViewDidEnter {

    nutzername: string;
    email: string;
    passwort: string;
    passwortConfirm: string;
    isOnline: boolean;

    errors: Map<string, string> = new Map<string, string>();

    @ViewChild('focus') private nutzernameRef: IonInput;

    constructor(private authService: AuthService,
                private router: Router,
                private todoService: TodoService) {
        if (localStorage.getItem('userID')) {
            this.router.navigate(['/home']);
        }
    }

    /**
     * Method to transmit the data of a new User to the Database.
     *
     * @param nutzername is the User nickname.
     * @param email is the E-Mail of the User.
     * @param passwort is the password of the user.
     */
    async signUp(nutzername, email: string, passwort: string) {
        this.errors.clear();

        if (!nutzername) {
            this.errors.set('nutzername', 'Nutzername darf nicht leer sein!');
        }
        if (!email) {
            this.errors.set('email', 'Email darf nicht leer sein!');
        }
        if (!this.emailIsValid(email)) {
            this.errors.set('email', 'Fehlerhaftes Email Format!');
        }
        if (passwort.length < 6) {
            this.errors.set('passwort', 'Passwort muss mindestens 6 Zeichen besitzen!');
        }
        if (!passwort) {
            this.errors.set('passwort', 'Passwort darf nicht leer sein!');
        }
        if (passwort !== this.passwortConfirm) {
            this.errors.set('passwortConfirm', 'Passwörter stimmen nicht überein!');
        }

        if (this.errors.size === 0) {
            if (this.authService.getUser()) {
                if (this.todoService.todos.length > 0) {
                    await this.todoService.presentAlertImportTodos();
                }
                this.authService.isLoggedIn = true;
                this.todoService.refreshTodos();
            }
            this.authService.signUp(nutzername, email, passwort);
        }
    }

    /**
     * Checks if the given String, in this case an E-Mail, has all necessary Symbols, which have to be used.
     *
     * @param email is the given String, the users E-Mail.
     */
    emailIsValid(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    /**
     * Redirects the User to the login-page.
     */
    redirectToLogin() {
        this.router.navigate(['/login']);
    }

    /**
     * sets the focus on the email input
     */
    ionViewDidEnter() {
        setTimeout(() => this.nutzernameRef.setFocus(), 10);
    }

}
