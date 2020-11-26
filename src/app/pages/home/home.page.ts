import {Component} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
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
    priority = [
        '../../../assets/prio/highest-prio.svg',
        '../../../assets/prio/high-prio.svg',
        '../../../assets/prio/medium.svg',
        '../../../assets/prio/low-prio.svg',
        '../../../assets/prio/lowest-prio.svg'];

    constructor(private modalCtrl: ModalController,
                private router: Router,
                public todoService: TodoService,
                public authService: AuthService) {
        if (!localStorage.getItem('userID')) {
            this.authService.isLoggedIn = false;
            // this.router.navigate(['/login']);
        } else {
            authService.findById(localStorage.getItem('userID'))
                .subscribe(u => {
                    authService.user = u;
                    this.authService.isLoggedIn = true;
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

    async editModal(todo: Todo) {
        const modal = await this.modalCtrl.create({
            component: AddPage,
            cssClass: 'modal',
            swipeToClose: true,
            componentProps: {
                edit: true,
                todo
            }
        });
        return await modal.present();
    }
}
