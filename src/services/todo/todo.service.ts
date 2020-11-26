import {Injectable} from '@angular/core';
import {Todo} from '../../models/todo';
import {AlertController, LoadingController, ModalController, PopoverController} from '@ionic/angular';
import {User} from '../../models/user';
import {PopoverPriorityComponent} from '../../app/components/popover-priority/popover-priority.component';
import {kategorie} from '../../models/kategorie';
import {AuthService} from '../auth/auth.service';
import {StorageServiceService} from '../storage/storage-service.service';
import {PopoverCategoryPage} from '../../app/components/popover-category/popover-category.page';


@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos: Todo[] = [];
    categories: kategorie[] = [];
    catname = '';
    loading = this.loadingController.create({
        message: 'Bitte warten...',
        duration: 1500
    });

    constructor(private modalCtrl: ModalController,
                public popoverController: PopoverController,
                public storageService: StorageServiceService,
                public alertController: AlertController,
                public loadingController: LoadingController) {
        this.refreshTodos();
    }

    refreshTodos() {
        this.todos = this.storageService.getTodos();
    }

    async add(todo: Todo, autor: User) {
        if (todo.titel && todo.beschreibung) {
            todo.id = this.todos.length;
            todo.autor = autor;
            let minute = String(new Date().getMinutes());
            if (minute.length === 1) {
                minute = '0' + minute;
            }
            todo.zeit = new Date().getHours() + ':' + minute;
            todo.kategorie = new kategorie('default', 'nicht kategorisiert');
            await this.todos.push(todo);
            this.storageService.addTodo(todo);
            await this.modalCtrl.dismiss();
        } else {
            alert('du hund');
        }
    }

    /**
     * searches the categories array for a category with passed name
     * @param catname is a parameter that is set by ngModel in form
     * and passed to the todoService
     * @return returns instance of the found category object
     */
    getCatByName(catname: string): kategorie {
        for (const cat of this.categories) {
            if (catname === cat.name) {
                return cat;
            }
        }
    }

    /**
     * Reads FrontEnd form and creates new category, then
     * adds a category to the array categories in todoService
     * @param name name of the category
     */
    async addCategory(name: string) {
        if (name.length !== 0) {
            const id: string = (this.categories.length + 1).toString();
            console.log(this.categories);
            console.log(id);
            await this.categories.push(new kategorie((this.categories.length + 1).toString(), name));
            await this.modalCtrl.dismiss();
        } else {
            alert('Please enter a valid category name. ');
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

    /***
     * This method changes the priority of a toto 0 is the lowest
     * @param toto is the to Set toto
     * @param i is the priority
     */
    setPriority(toto: Todo, i: number) {
        const index = this.todos.indexOf(toto);
        toto.prioritaet = i;
        this.todos[index] = toto;
        this.storageService.updateTodo(toto);
    }

    /***
     * Changes the category of passed task
     * @param task is an instance of the todo class, which is used
     * to find the the element of the todos array that is to be altered
     * @param cat is an instance of the kategorie class which defines
     * the new category that is to be set
     */
    setCategory(task: Todo, cat: kategorie) {
        this.todos[task.id].kategorie = cat;
        this.catname = cat.name;
    }

    async edit(todo: Todo) {
        if (todo.titel && todo.beschreibung) {
            this.todos.find(todoAusArray => todoAusArray.id === todo.id).titel = todo.titel;
            this.todos.find(todoAusArray => todoAusArray.id === todo.id).beschreibung = todo.beschreibung;
            this.todos.find(todoAusArray => todoAusArray.id === todo.id).kategorie = this.getCatByName(this.catname);
            this.storageService.updateTodo(todo);
            await this.modalCtrl.dismiss();
        }
    }

    async delete(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.storageService.deleteTodo(todo);
    }

    async done(todo: Todo) {
        this.todos[this.todos.indexOf(todo)].erledigt = true;
        this.storageService.updateTodo(todo);
    }

    async notDone(todo: Todo) {
        this.todos[this.todos.indexOf(todo)].erledigt = false;
        this.storageService.updateTodo(todo);
    }

    async presentAlertImportTodos() {
        if (localStorage.getItem('todos')) {
        const alert = await this.alertController.create({
            header: 'Todos übernehmen?',
            message: 'Möchten sie die erstellten Todos in ihr Profil übernehmen.<br>Falls nicht werden sie <strong>gelöscht</strong>.',
            buttons: [
                {
                    text: 'Löschen',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        localStorage.removeItem('todos');
                    }
                }, {
                    text: 'Übernehmen',
                    handler: async () => {
                        await (await this.loading).present();
                        const tmpTodo: Todo[] = JSON.parse(localStorage.getItem('todos'));
                        localStorage.removeItem('todos');
                        this.storageService.importToFirebase(tmpTodo);
                        await (await this.loading).onDidDismiss();
                        this.todos = this.storageService.getTodos();
                    }
                }
            ]
        });
        await alert.present();
        }
    }
}
