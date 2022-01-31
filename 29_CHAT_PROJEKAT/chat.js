class Chatroom{

    // Konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
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
        this.chats.onSnapshot( snapshot => {
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

let chatroom1 = new Chatroom("js", "Stefan");
console.log(chatroom1.username, chatroom1.room); // Testiram getere
chatroom1.username = "Dušan"; // Testiram seter za username
console.log(chatroom1.username);
chatroom1.room = "general"; // Testiram seter za room
console.log(chatroom1.room);

let chatroom2 = new Chatroom("general", "Milena");
// chatroom2.addChat("Trening pisanja CV-ja")
//     .then( () => console.log("Uspešno dodat čet"))
//     .catch( err => console.log(err));

chatroom2.getChats(d => {
    console.log(d);
});


