export class ChatUI{
    //konstruktor
    constructor(l) {
        this.list = l;
    }

    //geter i seter
    set list(l) {
        this._list = l;
    }

    get list() {
        return this._list;
    }

    templateLI(data) {
        // Izvući podatke iz prosleđenog dokuemnat i zapisati ih u formatu
        // useranme: poruka
        // time_stamp

        let htmlLI = 
        `<li>
            ${data.username} : ${data.message}
            <br>
            ${data.created_at}
        </li>`;

        this.list.innerHTML += htmlLI;
    }
} 