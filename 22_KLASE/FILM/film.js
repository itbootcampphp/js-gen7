export class Film {
    constructor(n, r, g, o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
        this.ocene = o;
    }

    // NASLOV
    set naslov(n) {
        this._naslov = n;
    }
    get naslov() {
        return this._naslov;
    }

    // REZISER
    set reziser(r) {
        this._reziser = r;
    }
    get reziser() {
        return this._reziser;
    }

    // GODINA IZDANJA
    set godinaIzdanja(g) {
        if (g < 1800) {
            this._godinaIzdanja = 1800;
        } else {
            this._godinaIzdanja = g;
        }
    }
    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

    // OCENE
    set ocene(o) {
        this._ocene = o;
    }

    get ocene() {
        return this._ocene;
    }

    // DODAVANJE JEDNE OCENE
    dodajOcenu(novaOcena) {
        this._ocene.push(novaOcena);
    }

    // OSTALE METODE
    stampaj() {
        console.log(this);
    }
}