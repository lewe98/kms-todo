import {Kategorie} from './kategorie';
import {User} from './user';

export class Todo {
    public id: string;
    public titel: string;
    public beschreibung: string;
    public kategorie: Kategorie;
    public autor: User;
    public erledigt: boolean;
    public prioritaet = 0;
    public zeit: string;

    /*constructor(titel: string, beschreibung: string, kategorie: Kategorie, autor: User) {
        this.titel = titel;
        this.beschreibung = beschreibung;
        this.kategorie = kategorie;
        this.autor = autor;
    }*/
}
