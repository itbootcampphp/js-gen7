import Auto from "./auto.js";

let a1 = new Auto("Citroen C4", "crna", false); 
// Nakon ovoga, a1 je objekat koji ima sledeca polja:
// a1._marka (vrednost ovog polja je "Citroen C4")
// a1._boja (vrednost ovog polja je "crna")
// a1._imaKrov (vrednost ovog polja je false)

console.log(a1);
console.log(typeof a1);

let a2 = new Auto("Skoda Octavia", "plava", true);
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

let a4 = new Auto("FP", undefined, true);
a4._imakrov = false;
console.log(a4);