import { Film } from "./film.js";

let film1 = new Film("Inception", "Cristopher Nolan", 1789, [8.2, 9.3, 7.9]);
let film2 = new Film("Zodiac", "David Fincher", 2007, [8, 9, 7, 6]);
let film3 = new Film("Taxi Driver", "Martin Scorsese", 1976, [7, 6, 7, 7, 8, 7]);

film1.stampaj();
film2.stampaj();
film3.stampaj();

// Testiram da li moj seter za naslov radi
film1.naslov = "Inception 1";
film1.stampaj();

// Testiram da li moj geter za naslov radi
console.log(film1.reziser);

// Dodavanje ocene u film 1
film1.dodajOcenu(10);
film1.stampaj();

// Prikaz svih filmova u tabelici
let tabelica = 
`<table border="1">
    <tr>
        <th>Naziv filma</th>
        <th>Režiser</th>
        <th>Godina izdanja</th>
        <th>Ocene</th>
    </tr>
`;

let filmovi = [film1, film2, film3];
filmovi.forEach(element => {
    tabelica +=
    `
    <tr>
        <td>${element.naslov}</td>
        <td>${element.reziser}</td>
        <td>${element.godinaIzdanja}</td>
        <td>${element.ocene}</td>
    </tr>
    `;
});
    
tabelica += `</table>`;
document.body.innerHTML = tabelica;
