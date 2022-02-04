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

    formatDate(date){        
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        //Dodavanje 0 ispred jednocifrenih vrednosti
        d = String(d).padStart(2,"0");
        m = String(m).padStart(2,"0");
        h = String(h).padStart(2,"0");
        min = String(min).padStart(2, "0");

        let strDate = d + "." + m + "." + y + ". - " + h + ":" + min;

        return strDate;
    }

    templateLI(data) {
        // Izvući podatke iz prosleđenog dokuemnat i zapisati ih u formatu
        // useranme: poruka
        // time_stamp

        let date = data.created_at.toDate();
        let strDate = this.formatDate(date);

        let htmlLI = 
        `<li>
            <span class="username">${data.username} : </span>
            <span class="message">${data.message}</span>
            <div class="date">${strDate}</div>
        </li>`;
        this.list.innerHTML += htmlLI;
    }

    clear() {
        this.list.innerHTML = ``;
    }
} 