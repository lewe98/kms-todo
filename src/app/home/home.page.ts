import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddPage} from '../add/add.page';
import {AuthService} from '../../services/auth/auth.service';
import {TodoService} from '../../services/todo/todo.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage {

    constructor(private modalCtrl: ModalController,
                public todoService: TodoService,
                private authService: AuthService) {
    }

    async addModal() {
        const modal = await this.modalCtrl.create({
            component: AddPage,
            cssClass: 'modal',
            swipeToClose: true,
            componentProps: {
                autor: this.authService.user.nutzername,
            }
        });
        return await modal.present();
    }
    
}
