import {Todo} from './todo';

export class User {
    public id: string;
    public email: string;
    public nutzername: string;
    public profilbild: string;
    public todos: Todo[];

    constructor(email: string, nutzername: string, profilbild: string) {
        this.email = email;
        this.nutzername = nutzername;
        this.profilbild = profilbild;
    }
}
