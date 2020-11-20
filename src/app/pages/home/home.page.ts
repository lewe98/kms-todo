import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddPage} from '../add/add.page';
import {AuthService} from '../../../services/auth/auth.service';
import {TodoService} from '../../../services/todo/todo.service';
import {Todo} from '../../../models/todo';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage {

    constructor(private modalCtrl: ModalController,
                private router: Router,
                public todoService: TodoService,
                public authService: AuthService) {
        if (!localStorage.getItem('userID')) {
            this.router.navigate(['/login']);
        } else {
            authService.findById(localStorage.getItem('userID'))
                .subscribe(u => {
                    authService.user = u;
                    alert(authService.user.nutzername);
                });
        }
    }

    async addModal() {
        const modal = await this.modalCtrl.create({
            component: AddPage,
            cssClass: 'modal',
            swipeToClose: true,
            componentProps: {
                todo: new Todo(),
                autor: this.authService.user
            }
        });
        return await modal.present();
    }
}
