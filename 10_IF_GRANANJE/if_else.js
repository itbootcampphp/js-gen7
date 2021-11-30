console.log("IF-ELSE grananje");

if(true) {
    console.log("Uslov je ispunjen");
}
else {
    console.log("Uslov nije ispunjen");
}

if(false) {
    console.log("Uslov je ispunjen");
}
else {
    console.log("Uslov nije ispunjen");
}

///////////////////////////////////////

a = 10;
b = 7;
if(a < b) {
    console.log("Broj " + a + "je strogo manji od broja" + b);
}
else {
    console.log(`Broj ${a} je "veći" ili 'jednak' od broja ${b}`);
}

////////////////////////////////////////

let god = 7;
if(god >= 18) {
    console.log("Osoba je punoletna");
}
else {
    console.log("Osoba je maloletna");
}

////////////////////////////////////////

// 1. Zadatak
// Za dva uneta broja ispisati koji je veći a koji je manji.
let br1 = 5;
let br2 = 6;
if(br1 > br2) {
    console.log(`Broj ${br1} je veći, dok je broj ${br2} manji`);
}
else {
    console.log(`Broj ${br1} je manji ili jednak, dok je broj ${br2} veći ili jednak`);
}

// 2. Zadatak
// Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.
let temp = -10;
if(temp >= 0) {
    document.body.innerHTML = `<p style="color: red;">Temperatura od ${temp} stepeni je u plusu</p>`;
}
else {
    document.body.innerHTML = `<p style="color: blue;">Temperatura od ${temp} stepeni je u minusu</p>`;
}

// 3. Zadatak
// U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. 
let pol = "M";
if(pol == "m") {
    // Prikaži avatar muškarca
    document.body.innerHTML += `<img src="slike/m.png">`;
}
else {
    // Prikaži avatar žene
    document.body.innerHTML += `<img src="slike/z.png">`;
}

// 6. Zadatak
// Odrediti najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).
let b1 = 15;
let b2 = 9;
let b3 = 27;

let maks = b1; //pretpostavka

//Ako je moja pretpostavka loša, uradim njen update
if(maks < b2) {
    maks = b2;
}

if(maks < b3) {
    maks = b3;
}

document.body.innerHTML += `<p> ${maks} </p>`;


// 10. zadatak
/*
Uporediti dva uneta datuma i ispisati koji od njih je raniji. 
*/
let dat1 = "2020-01-01";
let dat2 = "2020-05-01";
if (dat1 < dat2) {
    console.log(`${dat1} je bio pre ${dat2}`);
}
else if (dat2 < dat1) {
    console.log(`${dat2} je bio pre ${dat1}`);
}
else {
    console.log(`${dat1} i ${dat2} su isti`);
}

// 2. način
let dan1 = 01;
let mes1 = 06;
let god1 = 2021;

let dan2 = 02;
let mes2 = 06;
let god2 = 2021;

if (god1 < god2) {
    console.log("Datum 1 je raniji");
}
else if (god2 < god1) {
    console.log("Datum 2 je raniji");
}
// Pošto su godine iste, proveravano za mesece
else if (mes1 < mes2) {
    console.log("Datum 1 je raniji");
}
else if (mes2 < mes1) {
    console.log("Datum 2 je raniji");
}
// Pošto su i godine i meseci isti, proveravamo za dane
else if (dan1 < dan2) {
    console.log("Datum 1 je raniji");
}
else if (dan2 < dan1) {
    console.log("Datum 2 je raniji");
}
// Pošto su i godine i meseci i dani isti, datumi su jednaki
else {
    console.log("Datum 1 i datum 2 su isti");
}

//////////////////////

let stepeni = -10;

if (stepeni < 0) {
    console.log("Ispod 0 stepeni");
}
if (stepeni < 10) {
    console.log("Ispod 10 stepeni");
}
if (stepeni < 20) {
    console.log("Ispod 20 stepeni");
}
else {
    console.log("20 i više stepeni");
}

//////////////////////////

if (stepeni < 0) {
    console.log("Ispod 0 stepeni");
}
else if (stepeni < 10) {
    console.log("Ispod 10 stepeni");
}
else if (stepeni < 20) {
    console.log("Ispod 20 stepeni");
}
else {
    console.log("20 i više stepeni");
}


///////////////////////////

let poeni = 81;

if (poeni > 100) {
    console.log("Poeni ne mogu uzeti vrednost veću od 100");
}
else if (poeni >= 91) {
    console.log("Ocena 10");
}
else if (poeni >= 81) {
    console.log("Ocena 9");
}
else if (poeni >= 71) {
    console.log("Ocena 8");
}
else if (poeni >= 61) {
    console.log("Ocena 7");
}
else if (poeni >= 51) {
    console.log("Ocena 6");
}
else {
    console.log("Pali ste ispit");
}

////////////

let pol = "m";
let god = 32;

if (pol == "z") {
    console.log("Osoba ženskog pola");
    if (god >= 18) {
        console.log("Osoba je ženskog pola i punoletna je");
    }
    else {
        console.log("Osoba je ženskog pola i maloletna je");
    }
}
else {
    console.log("Osoba muškog pola");
    if (god >= 18) {
        console.log("Osoba je muškog pola i punoletna je");
    }
    else {
        console.log("Osoba je muškog pola i maloletna je");
    }
}

// 12. zadatak
/*
Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.
*/
// Početak i kraj radnog vremena prvog lekara
let p1 = 14;
let k1 = 20;

// Početak i kraj radnog vremena drugog lekara
let p2 = 12;
let k2 = 19;

if (k1 < p2) {
    console.log("NE");
}
else if (k2 < p1) {
    console.log("NE");
}
else {
    console.log("DA");
}

let broj1 = 33;
let broj2 = 3;
if (broj1 % broj2 == 0) {
    console.log(`${broj1} je deljiv brojem ${broj2}`);
}
else {
    console.log(`${broj1} nije deljiv brojem ${broj2}`);
}

console.log(broj);
console.log(broj + 1); // U promenmljivoj broj i dalje je zabeležena stara vrednost
console.log(broj);

//Na ovaj način upisujemo u promenljivu
//broj++;
//broj += 1;
//broj = broj + 1;
