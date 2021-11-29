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

