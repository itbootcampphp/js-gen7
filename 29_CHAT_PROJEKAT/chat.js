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
}

let chatroom1 = new Chatroom("js", "Stefan");
console.log(chatroom1.username, chatroom1.room); // Testiram getere
chatroom1.username = "Dušan"; // Testiram seter za username
console.log(chatroom1.username);
chatroom1.room = "general"; // Testiram seter za room
console.log(chatroom1.room);