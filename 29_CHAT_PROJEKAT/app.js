import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js';

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

let ulChatList = document.querySelector('ul');
let chatUI1 = new ChatUI(ulChatList);