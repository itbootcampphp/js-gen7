export class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.težina = t;
    }
    //ime
    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }
    //visina
    set visina(v) {
        if (v < 2.5 && v > 0) {
            this._visina = v;
        }
        else {
            this._visina = 1.7;
        }
    }
    get visina() {
        return this._visina;
    }
    //težina
    set težina(t) {
        if (t > 0 && t < 550) {
            this._težina = t;
        }
        else {
            this._težina = 58;
        }
    }
    get težina() {
        return this._težina;
    }
    //metode ostale
    štampaj() {
        console.log(this);
    }
    stampajListu(){
        let htmlLista = 
        `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Težina: ${this.težina}</li>
        </ul>`;
        return htmlLista;
    }
    bmi() {
        let bmi = this.težina / (this.visina * this.visina);
        return bmi;
    }
    kritičan() {
        let x = false;
        if (this.bmi() < 15 || this.bmi() > 40) {
            x = true;
        }
        return x;
    }
}