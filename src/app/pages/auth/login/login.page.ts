import {Component, ViewChild} from '@angular/core';
import {IonInput, PopoverController, ViewDidEnter} from '@ionic/angular';
import {AuthService} from '../../../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements ViewDidEnter {

    emailForLogIn: string;
    passwordForLogIn: string;
    errors: Map<string, string> = new Map<string, string>();
    @ViewChild('email')
    private emailRef: IonInput;

    constructor(private authService: AuthService,
                private router: Router,
                private popoverController: PopoverController) {
        if (localStorage.getItem('userID')) {
            this.router.navigate(['/home']);
        }
    }

    async dismissClickPopover() {
        await this.popoverController.dismiss();
    }

    /**
     * checks if the input is correct and logged the user in if it is
     * @param email - user's email
     * @param password - user's password
     */
    async login(email: string, password: string) {
        this.errors.clear();
        await this.dismissClickPopover();
        await this.authService.signIn(email, password)
            .then(() => {
                this.router.navigate(['/home']);
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                    this.errors.set('wrongData', 'Fehlerhaftes Email Format!');
                } else if (!email && !password) {
                    this.errors.set('wrongData', 'E-Mail und Passwort darf nicht leer sein!');
                } else if (!email) {
                    this.errors.set('wrongData', 'Email darf nicht leer sein!');
                } else if (!password) {
                    this.errors.set('wrongData', 'Passwort darf nicht leer sein!');
                } else if (password.length < 6) {
                    this.errors.set('wrongData', 'Passwort muss mindestens 6 Zeichen lang sein!');
                } else if (error.code === 'auth/user-not-found') {
                    this.errors.set('wrongData', 'E-Mail oder Passwort wurde falsch eingegeben!');
                } else if (error.code === 'auth/wrong-password') {
                    this.errors.set('wrongData', 'E-Mail oder Passwort wurde falsch eingegeben!');
                }
            });
    }

    /**
     * sets the focus on the email input
     */
    ionViewDidEnter() {
        setTimeout(() => this.emailRef.setFocus(), 10);
    }

}
