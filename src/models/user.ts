import {Todo} from './todo';
import {kategorie} from './kategorie';

export class User {
    public id: string;
    public email: string;
    public nutzername: string;
    public profilbild: string;
    public todos: Todo[];
    public kategorien: kategorie;

    constructor(email: string, nutzername: string, profilbild: string) {
        this.email = email;
        this.nutzername = nutzername;
        this.profilbild = profilbild;
    }
}
