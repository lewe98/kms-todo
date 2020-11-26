import {Injectable} from '@angular/core';
import {Todo} from '../../models/todo';
import {LoadingController, ModalController, PopoverController} from '@ionic/angular';
import {User} from '../../models/user';
import {PopoverPriorityComponent} from '../../app/components/popover-priority/popover-priority.component';
import {kategorie} from '../../models/kategorie';
import {PopoverCategoryPage} from "../../app/components/popover-category/popover-category.page";


@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos: Todo[] = [];
    erledigt: Todo[] = [];
    categories: kategorie[] = [];
    catname = '';

    constructor(private modalCtrl: ModalController,
                public popoverController: PopoverController) {
    }

    async add(todo: Todo, autor: User) {
        if (todo.titel && todo.beschreibung) {
            todo.id = this.todos.length;
            todo.autor = autor;
            todo.zeit = new Date().getHours() + ':' + new Date().getMinutes();
            todo.kategorie = this.getCatByName(this.catname);
            await this.todos.push(todo);
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
        // TODO: Update Todo in Firebase
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
            await this.modalCtrl.dismiss();
        }
    }

    async delete(todo: Todo) {
        this.todos.splice(todo.id, 1);
    }

    async done(todo: Todo) {
        this.todos[todo.id].erledigt = true;
    }

    async notDone(todo: Todo) {
        this.erledigt.splice(todo.id, 1);
        this.todos.push(todo);
    }
}
