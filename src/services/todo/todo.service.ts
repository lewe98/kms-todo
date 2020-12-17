import {Injectable} from '@angular/core';
import {Todo} from '../../models/todo';
import {AlertController, LoadingController, ModalController, PopoverController} from '@ionic/angular';
import {User} from '../../models/user';
import {Kategorie} from '../../models/kategorie';
import {StorageServiceService} from '../storage/storage-service.service';


@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos: Todo[] = [];
    filteredAufgabenArray: Todo[] = [];
    categories: Kategorie[] = [];
    catname = '';
    loading = this.loadingController.create({
        message: 'Bitte warten...',
        duration: 1500
    });
    searchInput = '';
    filterCat = '';

    constructor(public modalCtrl: ModalController,
                public storageService: StorageServiceService,
                public alertController: AlertController,
                public loadingController: LoadingController) {
        this.refreshTodos();
        this.refreshCategories();
    }

    refreshTodos() {
        this.todos = this.storageService.getTodos();
        this.filteredAufgabenArray = this.storageService.getTodos();
        this.searchInput = '';
    }

    refreshCategories() {
        if (!this.categories.length && !localStorage.getItem('cats')) {
            this.storageService.addCategorie(new Kategorie('0', 'nicht kategorisiert'));
        }
        this.categories = this.storageService.getCategories();
    }

    async add(todo: Todo, autor: User, kategorie: string) {
        if (todo.titel && todo.beschreibung) {
            todo.id = this.todos.length;
            todo.autor = autor;
            let minute = String(new Date().getMinutes());
            if (minute.length === 1) {
                minute = '0' + minute;
            }
            todo.zeit = new Date().getHours() + ':' + minute;
            if (!kategorie) {
                kategorie = 'nicht kategorisiert';
            }
            todo.kategorie = new Kategorie(kategorie, kategorie);
            await this.todos.push(todo);
            await this.storageService.addTodo(todo);
            await this.refreshTodos();
            await this.modalCtrl.dismiss();
        } else {
            alert('Bitte gültige Daten eintragen.');
        }
    }

    /**
     * searches the categories array for a category with passed name
     * @param catname is a parameter that is set by ngModel in form
     * and passed to the todoService
     * @return returns instance of the found category object
     */
    getCatByName(catname: string): Kategorie {
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
            const id: string = (this.categories.length).toString();
            const cat = new Kategorie(id, name);
            this.storageService.addCategorie(cat);
            this.refreshCategories();
        } else {
            alert('Please enter a valid category name.');
        }
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
    setCategory(task: Todo, cat: Kategorie) {
        task.kategorie = cat;
        this.storageService.updateTodo(task);
        this.refreshTodos();
    }

    async edit(todo: Todo) {
        if (todo.titel && todo.beschreibung) {
            this.todos = this.todos.map(t => {
                if (t.id === todo.id) {
                    todo.kategorie = this.getCatByName(this.catname);
                    return todo;
                }
            });
            this.storageService.updateTodo(todo);
            await this.modalCtrl.dismiss();
        }
    }

    async delete(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.storageService.deleteTodo(todo);
        this.refreshTodos();
    }

    async deleteCategorie(cat: Kategorie) {
        this.categories.splice(this.categories.indexOf(cat), 1);
        this.storageService.deleteCategorie(cat);
        this.refreshCategories();
    }

    async done(todo: Todo) {
        console.log(todo);
        todo.erledigt = true;
        this.storageService.updateTodo(todo);
        this.refreshTodos();
    }

    async notDone(todo: Todo) {
        todo.erledigt = false;
        this.storageService.updateTodo(todo);
        this.refreshTodos();
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
                        handler: () => {
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
                            this.refreshTodos();
                        }
                    }
                ]
            });
            await alert.present();
        }
    }
}
