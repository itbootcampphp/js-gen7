import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js';

// DOM
let ulChatList = document.querySelector('ul');
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');
let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');

// Objekti klasa / Instance klasa
let chatroom = new Chatroom("js", "Stefan");
let chatUI = new ChatUI(ulChatList);

// Ispis dokumeneata iz db u konzoli
chatroom.getChats(d => {
    console.log(d);
});

// Ispis dokumenata iz db na stranici
chatroom.getChats(d => {
    chatUI.templateLI(d);
});

//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit' , e => {
    e.preventDefault();
    let message = inputMessage.value;
    chatroom.addChat(message)
        .then( () => formMessage.reset())
        .catch( error => console.log(error));
});

// Kada je submit dugme Update izmeni korisničko ime
formUsername.addEventListener('submit', e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    chatroom.username = newUsername;
    formUsername.reset();
});
