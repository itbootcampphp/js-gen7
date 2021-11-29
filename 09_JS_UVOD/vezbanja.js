"use strict"; // Strict - mora pravilno da se kuca JS kod :)

// Zadatak 1
let s = 15;
let m = 21;

let odPonoci = s * 60 + m;
console.log("Od ponoci je proslo " + odPonoci + " minuta");

let doPonoci =  24 * 60 - odPonoci;
//let doPonoci = (24 - s) * 60 - m;
console.log("Do ponoci je ostalo: " + doPonoci + " minuta");

// Zadatak 2
let minOdPonoci = 909; 

// Prvi nacin
// minOdPonoci = ___ * 60 + minSada
// minOdPonoci - minSada = ___ * 60
// (minOdPonoci - minSada) / 60 = ___
let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) / 60;
console.log("Sada je " + satSada + ":" + minSada);

// Drugi nacin
// console.log(minOdPonoci / 60);  - deljenje vraca realan broj
// console.log(Math.floor(minOdPonoci / 60));  - ceo broj manji ili jednak od rez.
// console.log(Math.ceil(minOdPonoci / 60));   - ceo broj veci ili jednak od rez.
// console.log(Math.round(minOdPonoci / 60));  - ceo broj rezultat zaokruzivanja
let satSada2 = Math.floor(minOdPonoci / 60);
let minSada2 = minOdPonoci % 60;
console.log("Sada je " + satSada2 + ":" + minSada2);

// Zadatak 3
let cenaRobe = 1750;
let novcanica = 2000;

let kusur = novcanica - cenaRobe;
console.log("Kusur koji treba da se vrati je " + kusur + " dinara");

// Zadatak 6
let novacEvri = 200;
let kursEvri = 117.5782;

let evriUDinare = novacEvri * kursEvri;
console.log("Imamo " + evriUDinare + " dinara nakon razmene");

let novacDinari = 10000;
let dinariUEvre = novacDinari / kursEvri;
console.log("Imamo " + dinariUEvre + " evra nakon razmene");


// Zadatak 7
let kursDolari = 104.7281;

let k1 = novacEvri * kursEvri;
let k2 = k1 / kursDolari;
console.log("Imamo " + k2 + " dolara nakon razmene");


let novacDolari = 200;
let k3 = novacDolari * kursDolari / kursEvri;
console.log("Imamo " + k3 + " evra nakon razmene");

// Trenutno vreme i datum
let datum = new Date(); // datum - objekat koji sadrzi inf. o trenutnom datumu i vremenu

let godina = datum.getFullYear();
let mesec = datum.getMonth() + 1;
let datumUMesecu = datum.getDate(); // datum u mesecu
let danUNedelji = datum.getDay(); // dan u nedelji
console.log("Danas je " + datumUMesecu + "." + mesec + "." + godina);
console.log(danUNedelji);