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
        <th>Prosecna</th>
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
        <td>${element.prosek()}</td>
    </tr>
    `;
});
    
tabelica += `</table>`;
document.body.innerHTML = tabelica;

let vekFilmova = (arr, vek) =>{
    let pocetnaGod = vek * 100 - 99;
    let krajnaGod = vek * 100;
    arr.forEach(el =>{
        if(el.godinaIzdanja <= krajnaGod && el.godinaIzdanja >= pocetnaGod){
            console.log(el.naslov);
        }
    });
}
vekFilmova(filmovi, 20);

////////////////////////////

let prosjecnaOcena = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(film => {
        film.ocene.forEach(ocjena => {
            suma += ocjena;
            br++;
        });
    });
    return suma / br;
}
console.log(prosjecnaOcena(filmovi));

///////////////////////////

let najboljeOcenjeni = arr => {
    let najbolji = arr[0].prosek()
    for (let i =0; i< arr.length; i++){
        if (najbolji < arr[i].prosek()){
            najbolji = arr[i].prosek()
        }
    }
    return najbolji
}
console.log(najboljeOcenjeni(filmovi))

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
/*
globalni prosek = 7.0
film 1 avg = 7.5         (film1avg - globalniProsek = 0.5)
film 2 avg = 8.9         (film2avg - globalniProsek = 8.9 - 7.0 = 1.9)
film 3 avg = 6.9         (film3avg - globalniProsek = 6.9 - 7.0 = -0.1)
....
*/ 
let osrednjiFilm = arr => {
    let globalniProsek = prosjecnaOcena(arr);
    let filmNajbliziProseku = arr[0]; // pretpostavka da je prvi film najbliži proseku
    let najmanjaRazlikaOdProseka = Math.abs(globalniProsek - filmNajbliziProseku.prosek());
    arr.forEach( f => {
        let prosecnaOcenaFilma = f.prosek();
        if(Math.abs(globalniProsek-prosecnaOcenaFilma) < najmanjaRazlikaOdProseka ) {
            najmanjaRazlikaOdProseka = Math.abs(globalniProsek-prosecnaOcenaFilma);
            filmNajbliziProseku = f;
        }
    });
    return filmNajbliziProseku;
}

osrednjiFilm(filmovi).stampaj();

//////////////////////////////

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najFilm = arr => {
    let najbolji = arr[0].prosek()
    let naj = arr[0];
    for (let i =0; i< arr.length; i++){
        if (najbolji < arr[i].prosek()){
            najbolji = arr[i].prosek()
            naj = arr[i];
        }
    }
    return naj;
}

////////////////////////////

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = arr => {
    let najboljiFilm = najFilm(arr);
    let oceneNajboljegFilma = najboljiFilm.ocene; // vraća niz ocena najbolje ocenjenog filma
    let najslabijaOcena = oceneNajboljegFilma[0];
    oceneNajboljegFilma.forEach(o => {
        if(o < najslabijaOcena) {
            najslabijaOcena = o;
        }
    });
    console.log(najslabijaOcena);
}
najmanjaOcenaNajboljeg(filmovi);

////////////////////////////

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = niz => {
    let najmanja = niz[0].ocene[0];
    niz.forEach(f => {
        f.ocene.forEach(o => {
            if(o < najmanja){
                najmanja = o;
            }
        })
    })
    return najmanja;
}
console.log(najmanjaOcena(filmovi));

/////////////////////////

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.

let f1 = [8.2, 9.3, 7.9, 10]
let f2 = [8, 9, 7, 6]
let f3 = [7, 6, 7, 7, 8, 7]
// f = [8.2, 9.3, 7.9, 10, 8, 9, 7, 6, 7, 6, 7, 7, 8, 7]
let f = [];
// f = f.concat(f1, f2, f3);
f = f.concat(f1);
f = f.concat(f2);
f = f.concat(f3);
console.log(f); // tip je objekat kada radimo concat

f = [];
f.push(f1);
console.log(f); // tip je array kada radimo push

let sveOcene = arr => {
    let arrSveOcene = [];
    arr.forEach(f => {
        arrSveOcene = arrSveOcene.concat(f.ocene);
        //arrSveOcene.push(f.ocene);
    });
    return arrSveOcene;
}
console.log(sveOcene(filmovi));

// Niz koji prosleđujemo je niz svih ocena
// f = [8.2, 9.3, 7.9, 10, 8, 9, 7, 6, 7, 6, 7, 7, 8, 7]
let najcescaOcena = arr => {
    let pretpostavkaElem = arr[0];
    let pretpostavkaElemPojavljivanja = 1; // Sigurno se jednom pojavio

    for(let i = 0; i < arr.length; i++) {
        let tekuci = arr[i]; // zvezdica
        let tekuciBrPojavljivanja = 0;

        for(let j = 0; j < arr.length; j++) {
            if(tekuci == arr[j]) {
                // naišli smo na isti element
                tekuciBrPojavljivanja++;
            }
        }

        if(pretpostavkaElemPojavljivanja < tekuciBrPojavljivanja) {
            pretpostavkaElemPojavljivanja = tekuciBrPojavljivanja;
            pretpostavkaElem = tekuci;
        }

    }

    return pretpostavkaElem;
}
let sve = sveOcene(filmovi); // niz svih ocena
console.log(najcescaOcena(sve));

/////////////////////////

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (o, arr) => {
    let nizFilmova = [];
    arr.forEach( f => {
        if(f.prosek() > o) {
            // console.log(f);
            nizFilmova.push(f);
        }
    });
    return nizFilmova;
}
console.log(iznadOcene(7.4, filmovi));

let niz = iznadOcene(7.4, filmovi);
niz.forEach(f => {
    f.stampaj();
});

/////////////////////////

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNoviji = (o,arr) =>{
    let nizf =iznadOcene(o,arr);
    let noviji = nizf[0];
    nizf.forEach(e=>{
        if(noviji.godina < e.godina){
            noviji = e;
        };
    })
    console.log(noviji);
};
iznadOceneNoviji(7, filmovi)