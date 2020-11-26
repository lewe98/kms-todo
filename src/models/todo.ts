import {kategorie} from './kategorie';
import {User} from './user';

export class Todo {
    public id: number;
    public titel: string;
    public beschreibung: string;
    public kategorie: kategorie;
    public autor: User;
    public erledigt: boolean;
    public prioritaet = 2;
    public zeit: string;

    /*constructor(titel: string, beschreibung: string, kategorie: Kategorie, autor: User) {
        this.titel = titel;
        this.beschreibung = beschreibung;
        this.kategorie = kategorie;
        this.autor = autor;
    }*/
}
