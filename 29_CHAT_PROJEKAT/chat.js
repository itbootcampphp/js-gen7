export class Chatroom{

    // Konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub = false; // Odredili smo da false bude kao signal da je stranica 1. put učitana
    }

    // Seteri
    set username(u){
        this._username = u;
    }
    set room(r){
        this._room = r;
    }

    // Geteri
    get username(){
        return this._username;
    }
    get room(){
        return this._room;
    }

    // Update room
    updateRoom(ur) {
        this.room = ur;
        // if(this.unsub != false) isto je if(this.unsub == true) isto je if(this.unsub)
        if(this.unsub != false) { // unsub više nije false nego je u getChats postalo funkcija
            this.unsub(); // unsub je sada funkcija i pozivam je sa ()
        }
    }

    // Dodavanje nove poruke
    async addChat(mess){
        // Dohvatanje trenutnog vremena, koji nam je potreban za timestamp (cteated_at polje u dokumentu)
        let date = new Date(); 

        // Kreiranje dokumenta/objekta prosleđujem bazi podataka
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date) 
        };

        // Da sačuvan dokument u db
        let response = await this.chats.add(docChat);
        return response; // Vraćam Promise i mogu za njega da kažem .then i .catch            
    }   

    // Metod koji prati promene u bazi i vraća poruke
    getChats(callback) {
        this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot( snapshot => {
            snapshot.docChanges().forEach( change => {
                // Ispiati dokumenete koji su dodati u bazu
                if(change.type == "added") {
                    // console.log(change.doc.data());
                    callback(change.doc.data()); // prosleđivanje dokumenta na ispis (ispis realizujemo kada realizujemo callback funkciju)
                }
            });
        });
    }
}




