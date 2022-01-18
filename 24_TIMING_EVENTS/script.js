console.log("1");
console.log("2");

/*
for(let i = 1; i <= 100000; i++) {
    console.log(i);
}
- BLOKIRAJUCI KOD 
*/

setTimeout(() => {
    console.log("3"); 
}, 1000 * 4);

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let div = document.getElementById("result");
let ispis = document.getElementById("ispis");
let timer = null;
let clock = null;

btn1.addEventListener('click', function() {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(timer === null) {
        timer = setTimeout(() => {
            div.innerHTML = `${sati}:${minuti}:${sekunde}`;
            timer = null;
        }, 2000);
    }
});

btn2.addEventListener('click', function() {
    clearTimeout(timer);
    timer = null;
});

btn3.addEventListener('click', function() {
    if(clock === null) {
        clock = setInterval(() => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            ispis.innerHTML = `${sati}:${minuti}:${sekunde}`;
        }, 1000 / 10);
    }
});

btn4.addEventListener('click', function() {
    clearInterval(clock);
    clock = null;
});





/*
setTimeout(() => {
    console.log(this); // this = window
}, 1000 / 2);

setTimeout(function() {
    console.log(this); // this = objekat koji poziva metodu
}, 1000 * 2);

function ispis() {
    console.log("3");
}
setTimeout(ispis, 1000 * 2);
*/