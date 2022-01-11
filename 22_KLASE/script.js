import Auto from "./auto.js";

let a1 = new Auto("Citroen C4", "crna", false); 
// Nakon ovoga, a1 je objekat koji ima sledeca polja:
// a1._marka (vrednost ovog polja je "Citroen C4")
// a1._boja (vrednost ovog polja je "crna")
// a1._imaKrov (vrednost ovog polja je false)

console.log(a1);
console.log(typeof a1);

let a2 = new Auto("Skoda Octavia", "plava", true, 4);
console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);

let a3 = new Auto("Fiat Punto", "bela", true);
console.log(a3);
console.log(a3._marka);
console.log(a3._boja);
console.log(a3._imaKrov);
a3._brojVrata = 5;
console.log(a3);

let a4 = new Auto("    ", undefined, true);
a4._imakrov = false;
console.log(a4);

a1.sviraj();
a2.sviraj();
a3.sviraj();
a4.sviraj();

a1.vozi(50);
a4.vozi(200);

// U klasi pisemo polja i metode
// Sva polja klase se definisu u constructor
// Mozemo dodavati proizvoljne metode
// Svi objekti klase imace polja i metode navedene u klasi

a1._brojVrata = 4; // Poljima se pristupa bez zagrada
a1.sviraj(); // Metode imaju zagrade, a izmedju zagrada se navode parametri
a1.marka = "    Audi A4"; // seter marka
//a1.postaviMarku("    Audi A4");
console.log(a1);
console.log(a1.marka); // geter marka

let a5 = new Auto("   Audi A4", "plava", false, 3);
console.log(a5);

a3.stampaj();