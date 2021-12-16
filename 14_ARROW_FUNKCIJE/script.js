function suma(a, b) // definicija f-je
{
    return a + b;
}

console.log(suma(4, 5)); // Poziv f-je
console.log(suma(1, 0)); // Poziv f-je

// Anonimne funkcije
let suma2 = function(a, b)
{
    return a + b;
}

console.log(suma2(6, 6));

// Arrow funkcije (skracen zapis anonimnih funkcija)
let suma3 = (a, b) => {
    return a + b;
}

console.log(suma3(5, 3));

// Arrow f-ja za ispis poruke
let hello = () => {
    console.log("Hello world!");
}

hello();

let pozdrav = (ime, prezime) => {
    console.log("Zdravo " + ime + " " + prezime);
}

pozdrav("Kristian", "Zdravkovic");
pozdrav("Vladan", "Stojic");

// Arrow f-ja kojoj se prosledjuje ime i godine korisnika,
// a ona ispisuje ime i da li je korisnik punoletan ili ne

let ispis = (ime, godine) => {
    if(godine < 18) 
    {
        let poruka = `Korisnik ${ime} je maloletna osoba`;
        document.body.innerHTML += `<p style="color: blue">${poruka}</p>`;
    }
    else 
    {
        let poruka = `Korisnik ${ime} je punoletna osoba`;
        document.body.innerHTML += `<p style="color: green">${poruka}</p>`;
    }
}

ispis("Pera", 28);
ispis("Mika", 16);

// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
let slika = (putanja) => {
    return `<img src="${putanja}">`;
}

let slika2 = (putanja) => `<img src="${putanja}">`;

let slika3 = putanja => `<img src="${putanja}">`;

document.body.innerHTML += slika("https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg");

document.body.innerHTML += slika2("https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg");

document.body.innerHTML += slika3("https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg");

// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (a, b) => {
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
}

let max2 = (a, b) => (a > b) ? a : b;

let max4 = (a, b, c, d) => max2(max2(a, b), max2(c, d));

let max4DN = (a, b, c, d) => max2(max2(max2(a, b), c), d);

console.log(max2(16, 16));
console.log(max4(6, 19, -5, 5));
console.log(max4DN(6, 19, -5, 5));

// Da li je broj paran ili ne
let paran = n => (n % 2 == 0);
console.log(paran(6));

let sedmiDan = n => (n % 7 == 0) ? "Ned" : (n % 7 == 1) ? "Pon" : (n % 7 == 2) ? "Uto" : (n % 7 == 3) ? "Sre" : (n % 7 == 4) ? "Cet" : (n % 7 == 5) ? "Pet" : "Sub";

for(i = 0; i < 7; i++)
{
    console.log(sedmiDan(i));
}