import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js';

// DOM
let ulChatList = document.querySelector('ul');
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');
let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');
let navRooms = document.querySelector('nav');

// Objekti klasa / Instance klasa
let username = "anonymus";
if(localStorage.username) {
    username = localStorage.username;
}
let chatroom = new Chatroom("js", username);
let chatUI = new ChatUI(ulChatList);

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
    localStorage.setItem("username", newUsername);
    formUsername.reset();
});

// Dugmad za promenu soba
navRooms.addEventListener('click', e => {
    if (e.target.tagName == "BUTTON") {
        //1. Izbrisati sve poruke sa ekrana
        chatUI.clear();
        //2. Pozvati promenu sobe
        chatroom.updateRoom(e.target.id);
        //3. Prikazati četove
        chatroom.getChats(data => {
            chatUI.templateLI(data);
        });
    }
});