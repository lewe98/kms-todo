import {Component, ViewChild} from '@angular/core';
import {IonInput, LoadingController, ModalController, PopoverController, ViewDidEnter} from '@ionic/angular';
import {AddPage} from '../add/add.page';
import {AuthService} from '../../../services/auth/auth.service';
import {TodoService} from '../../../services/todo/todo.service';
import {Todo} from '../../../models/todo';
import {PopoverPriorityComponent} from '../../components/popover-priority/popover-priority.component';
import {PopoverCategoryPage} from '../../components/popover-category/popover-category.page';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements ViewDidEnter {
    loading = this.loadingController.create({
        message: 'Bitte warten...',
        duration: 1500
    });
    priority = [
        '../../../assets/prio/highest-prio.svg',
        '../../../assets/prio/high-prio.svg',
        '../../../assets/prio/medium.svg',
        '../../../assets/prio/low-prio.svg',
        '../../../assets/prio/lowest-prio.svg'];
    @ViewChild(IonInput) search: IonInput;

    constructor(private modalCtrl: ModalController,
                public loadingController: LoadingController,
                public popoverController: PopoverController,
                public todoService: TodoService,
                public authService: AuthService) {
        if (!localStorage.getItem('userID')) {
            this.authService.isLoggedIn = false;
            this.todoService.refreshCategories();
            // this.router.navigate(['/login']);
        } else {
            authService.findById(localStorage.getItem('userID'))
                .subscribe(u => {
                    authService.user = u;
                    this.authService.isLoggedIn = true;
                    this.todoService.refreshTodos();
                    this.todoService.refreshCategories();
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

    async logout() {
        await (await this.loading).present();
        await this.authService.logOut();
        setTimeout(() => {
            this.todoService.refreshTodos();
        }, 1000);
        await (await this.loading).onDidDismiss();
    }

    async doSearch() {
        const input = await this.search.getInputElement();
        const searchValue = input.value;
        this.todoService.filteredAufgabenArray = this.todoService.todos.filter(t => {
            return t.titel.toLowerCase().includes(searchValue.toLowerCase()) ||
                t.beschreibung.toLowerCase().includes(searchValue.toLowerCase()) ||
                t.kategorie.name.toLowerCase().includes(searchValue.toLowerCase());
        });
    }

    async filterByCat(catname: string) {
        if (catname === 'no filter') {
            this.todoService.filteredAufgabenArray = this.todoService.todos;
        } else {
            this.todoService.filteredAufgabenArray = this.todoService.todos.filter(t => {
                return t.kategorie.name === catname;
            });
        }
    }

    async presentPopoverPriority(ev: any, toto: Todo) {
        const popover = await this.popoverController.create({
            component: PopoverPriorityComponent,
            event: ev,
            translucent: true,
            componentProps: {
                toto
            }
        });
        return await popover.present();
    }


    /**
     * Method that calls the popover to display the elements of categories array
     * to select an alternative category for a task
     * @param ev that occurs when popover is called upon
     * @param task is an instance of the todo class
     * that is passed to the popover page
     */
    async presentPopoverCategory(ev: any, task: Todo) {
        const popover = await this.popoverController.create({
            component: PopoverCategoryPage,
            event: ev,
            translucent: true,
            componentProps: {
                task
            }
        });
        return await popover.present();
    }

    clear() {
        this.search.value = '';
        this.todoService.filteredAufgabenArray = this.todoService.todos;
    }

    ionViewDidEnter() {
        this.search.value = '';
    }
}
