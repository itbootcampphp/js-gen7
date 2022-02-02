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

// Ispis dokumeneata iz db u konzoli
chatroom2.getChats(d => {
    console.log(d);
});

let ulChatList = document.querySelector('ul');
let chatUI1 = new ChatUI(ulChatList);

// Ispis dokumenata iz db na stranici
chatroom2.getChats(d => {
    chatUI1.templateLI(d);
});

// DOM
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');

//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit' , e => {
    e.preventDefault();
    let message = inputMessage.value;
    chatroom1.addChat(message)
        .then( () => formMessage.reset())
        .catch( error => console.log(error));
});