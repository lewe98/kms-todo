import {Kategorie} from './kategorie';

export class User {
    public id: string;
    public email: string;
    public nutzername: string;
    public profilbild: string;
    public todos: string[];
    public kategorien: string[] = [JSON.stringify(new Kategorie('0', 'nicht kategorisiert'))];

    constructor(email: string, nutzername: string, profilbild: string) {
        this.email = email;
        this.nutzername = nutzername;
        this.profilbild = profilbild;
    }
}
