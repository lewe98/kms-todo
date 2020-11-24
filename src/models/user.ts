export class User {
    public id: string;
    public email: string;
    public nutzername: string;
    public profilbild: string;

    constructor(email: string, nutzername: string, profilbild: string) {
        this.email = email;
        this.nutzername = nutzername;
        this.profilbild = profilbild;
    }
}