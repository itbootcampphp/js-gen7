console.log("IF - ELSE IF");

let ocena = 4;
if(ocena == 5) {
    console.log("Odlčan 5");
}
else if(ocena == 4) {
    console.log("Vrlo dobar 4");
}
else if(ocena == 3) {
    console.log("Dobar 3");
}
else if(ocena == 2) {
    console.log("Dovoljan 2");
}
else if(ocena == 1) {
    console.log("Nedovoljan 1");
}
else {
    console.log("Pogrešan unos");
}

console.log("Kod nakon if - else if");

/////////////////////

// 11.
let sati = 15;
if(sati < 9) {
    console.log("Firma ne radi");
}
else if(sati >= 17) {
    console.log("Firma ne radi");
}
else {
    console.log("Firma radi");
}

// 13. 
// Za uneti broj ispitati da li je paran ili nije. 
// 4 / 2 = 2 cela + 0 statak
// 5 / 2 = 2 cela + 1 ostatak
// 6 / 2 = 3 cela + 0 ostatak
// 7 / 2 = 3 cela + 1 ostatak
let k = 19;
if(k % 2 == 0) {
    console.log(`Broj ${k} je paran`);
}
else {
    console.log(`Broj ${k} je neparan`);
}

// 14.
// nesto / 0 = beskonačno
// 0 / nesto = 0
k = 1;
if(k % 3 != 0) {
    console.log(`Broj ${k} nije deljiv brojem 3`);
}
else {
    console.log(`Broj ${k} je deljiv brojem 3`);
}

// 17.
// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture

let a1 = 145;
let a2 = 65;
let a3 = 35;

// Najveći broj
let maks = a1;
if(maks < a2) {
    maks = a2;
}
if(maks < a3) {
    maks = a3;
}
console.log(`Najveći broj je ${maks}`);

// Najmanji broj
let min = a1;
if(min > a2) {
    min = a2;
}
if(min > a3) {
    min = a3;
}
console.log(`Najmanji broj je ${min}`);

// Srednji broj
let srednji = a1 + a2 + a3 - min - maks;
console.log(`Srednji broj je ${srednji}`);

// 18.
// Za učitani broj ispitati da li je ceo.
// 1. Način
let s = 15.3;
console.log(s%1);
if(s%1 == 0) {
    console.log(`Broj ${s} je ceo broj`);
}
else {
    console.log(`Broj ${s} nije ceo broj`);
}

// 2. Način
s = 14.5;
console.log(Math.floor(s)); //Može i sa zaokruživanjem round i ceil
if(Math.floor(s) == s) {
    console.log(`Broj ${s} je ceo broj`);
}
else {
    console.log(`Broj ${s} nije ceo broj`);
}
