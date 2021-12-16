console.log("Funkcije");

function zdravo() {
    console.log("Zdravo svete!!!");
}

zdravo();
zdravo();
console.log("Hello!");
zdravo();

/////////////////////////////

function stampaj(tekst) {
    console.log(tekst);
}

stampaj("Jelena");
stampaj("Stefan");
let ime = "Sofija";
stampaj(ime);

/////////////////////////////

function korisnik(ime, prezime) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime}`);
}
korisnik("Stefan", "Stanimirović");
korisnik("Jelena", "Matejić");

/////////////////////////////

function korisnikGodine(ime, prezime, godine) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina`);
}

korisnikGodine('Jelena', 'Matejić', 27);
korisnikGodine('Pera', 'Perić', 17);

/////////////////////////////

let x = 5;
let y = 7;
let z = x + y;
console.log(z); 

x = 6;
y = 4;
z = x + y;
console.log(z);

x = 2;
y = -9;
z = x + y;
console.log(z);

function zbirDvaBroja(x, y) {
    let zbir = x + y;
    console.log(zbir); // Ispisuje vrednost
}

zbirDvaBroja(15, 12);
zbirDvaBroja(3, 9);

/////////////////////////////

function vratiZbirDvabroja(a, b) {
    let zbir = a + b;
    return zbir;
}

let rez = vratiZbirDvabroja(50, 70);
console.log(rez);
rez = vratiZbirDvabroja(16, 15);
console.log(rez);

let rez1 = vratiZbirDvabroja(4, 6); // rez1 = 10
let rez2 = vratiZbirDvabroja(5, 7); // rez2 = 12
let rez3 = vratiZbirDvabroja(rez1, rez2); // rez3 = 22;
console.log(rez3);

let rez4 = vratiZbirDvabroja(4+5, 1+3);
console.log(rez4);

let rez5 = vratiZbirDvabroja(vratiZbirDvabroja(7,9) , 3);
console.log(rez5);

let rez6 = vratiZbirDvabroja(vratiZbirDvabroja(1,2) , vratiZbirDvabroja(5,3));
console.log(rez6);

/////////////////////////////

function voda(temperatura) {
    console.log(`Uneli ste temperaturu od ${temperatura} stepeni C`);
    if(temperatura <= 0) {
        console.log("Voda je u čvrstom agregatnom stanju");
    }
    else if(temperatura >= 100) {
        console.log("Voda je u gasovitom agregatnom stanju");
    }
    else {
        console.log("Voda je u tečnom agregatnom stanju");
    }
}

voda(-3);
voda(100);

/////////////////////////////
// 2. Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja

function racunaj(br1, br2, operacija) {
    let rezultat = "";
    if(operacija == "+") {
        rezultat = br1 + br2;
    }
    else if(operacija == "-") {
        rezultat = br1 - br2;
    }
    else if(operacija == "*") {
        rezultat = br1 * br2;
    }
    else if(operacija == "/") {
        if(br2 == 0) {
            rezultat = "Deljenje nulom nije dozvoljeno";
        }
        else {
            rezultat = br1 / br2;
        }
    }
    else {
        rezultat = "Pogrešan unos";
    }
    console.log(rezultat);
}
racunaj(5, 4, "+");
racunaj(5, 4, "-");
racunaj(5, 4, "*");
racunaj(5, 4, "/");
racunaj(5, 4, "%");
racunaj(5, 0, "/");

/////////////////////////////
// 3. Napisati funkciju neparan koja za uneti ceo broj n VRAĆA tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    if(n%2 != 0) {
        return true; // neparan broj
    }
    else {
        return false; // paran broj
    }
}

let nep = neparan(13);
console.log(nep);

function neparan1(n) {
    let rez = true;
    if(n%2 == 0) {
        rez = false;
    }
    return rez;
}
let nep1 = neparan1(6);
console.log(nep1);

function neparan2(n) {
    return n%2 != 0;
}
let nep2 = neparan2(163);
console.log(nep2);

////////////////////////////////

// Primer 1 za scope i let
if(true) {
    let test = "Zdravo";
    if(true) {
        console.log(test); // Ovde vidi test
    }
}
//console.log(test); // Ovde ne vidi test jer je definisan sa let, koji je vidljiv samo u if scope

// Primer 2 za scope i let
if(true) {
    let test = "Zdravo"; // Linija *
    console.log(test); // ispisuje Zdravo koji je dodeljen u liniji *
    if(true) {
        let test = "Hello"; // Linija **
        console.log(test); // Ovde vidi test iz linije ** jer je u tom scope
    }
    console.log(test); // Ovde vidi test iz linije * 
}
//console.log(test); // Ovde ne vidi uopšte test

// Primer 3 za scope i let
if(true) {
    let test = "Zdravo"; // Linija *
    console.log(test); // ispisuje Zdravo koji je dodeljen u liniji *
    if(true) {
        test = "ZZZ";
        console.log(test);
        //let test = "Hello"; // Linija **
        console.log(test); // Ovde vidi test iz linije ** jer je u tom scope
    }
    console.log(test); // Ovde vidi test iz linije * 
}

// let vidim samo u okviru scope, dok var vidim i izvan scope
if(true) {
    var proba = "proba"; // ako ne stavimo ni let ni var ispred promenljive, promenljiva se računa kao da je var
}
console.log(proba);

if(true) {
    var promenljiva = "promenljiva";
    if(true) {
        var promenljiva = "hmmmm"; // var promenljiva se posmatra na globalnom nivou
        console.log(promenljiva);
    }
    console.log(promenljiva);
}

///////////////////////////
// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
let m2 = maks2(60, 60)
console.log(m2);

// Vukašinov predlog
function maks4_vukaasin(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return a;
    } else if (b > a && b > c && b > d) {
        return b;
    }
    else if (c > a && c > b && c > d) {
        return c;
    } else if (d > a && d > b && d > c) {
        return d;
    }
    else {
        return "Pogresan unos ili su brojevi jednaki."
    }
}
let m4 = maks4_vukaasin(9000, 9000, 9000, 9000)
console.log(m4);

// Marijin predlog
function maks4_marija(a, b, c, d) {
    let max1 = a;
    if (max1 < b) {
        max1 = b;
    }
    if (max1 < c) {
        max1 = c;
    }
    if (max1 < d) {
        max1 = d;
    }
    // if (a == b && a==c && a==d) {max1 = `Sva 4 broja su ista.`;}
    return max1;
}
let cetiriBroja = maks4_marija(15, 79, 30, 444);
console.log(`Najveci broj od navedena 4 broja je ${cetiriBroja}.`);

// Jelenin predlog
function maks4_jelena(a, b, c, d) {
    let max1 = maks2(a, b); // Vrati mi koji je veći broj između a i b npr. 5 i 7 vratiće 7
    let max2 = maks2(c, d); // Vrati mi koji veći broj između c i d npr. 2 i 9 vratiće 9
    let max = maks2(max1, max2);
    return max;
}
let maks4broja = maks4_jelena(5,7,2,9);
console.log(maks4broja);

// Aleksandrov predlog
function maks4_aleksandar(a, b, c, d) {
    let max = maks2(maks2(a, b), maks2(c, d));
    return max; 
    // Ili zadatak rešiti u jednoj liniji kao 
    // return maks2(maks2(a, b), maks2(c, d));
}
let maks4brojaa = maks4_aleksandar(5,17,2,9);
console.log(maks4brojaa);

///////////////////////////
// 5. ZADATAK Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
// Nikola
function slika(putanja) {
    document.body.innerHTML += `<img style="margin-left:167px" src="${putanja}" alt="${putanja}nije ucitana" height="250">`;
  }
  slika(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Capitals-Maple_Leafs_%2834075134291%29.jpg/1200px-Capitals-Maple_Leafs_%2834075134291%29.jpg"
  );

  // 6. ZADATAK Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
  // Nikola
  function boja(boja) {
    document.body.innerHTML += `<p style="color:${boja};">Hokej je najbrzi kolektivni sport na svetu</p>`;
  }
  boja("red");

//7. ZADATAK

/*
Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
*/
// Bojan
console.log(`///////////////// 7. zadatak ////////////////`);
function sedmiDan(n) {
  if (n % 7 == 0) {
    console.log(`Nedelja`);
  } else if (n % 7 == 1) {
    console.log(`Ponedeljak`);
  } else if (n % 7 == 2) {
    console.log(`Utorak`);
  } else if (n % 7 == 3) {
    console.log(`Sreda`);
  } else if (n % 7 == 4) {
    console.log(`Cetvrtak`);
  } else if (n % 7 == 5) {
    console.log(`Petak`);
  } else if (n % 7 == 6) {
    console.log(`Subota`);
  }
}
sedmiDan(0);
sedmiDan(7);
sedmiDan(365);
function mesec(n) {
  if (n % 12 == 0) {
    console.log(`Januar`);
  } else if (n % 12 == 1) {
    console.log(`Februar`);
  } else if (n % 12 == 2) {
    console.log(`Mart`);
  } else if (n % 12 == 3) {
    console.log(`April`);
  } else if (n % 12 == 4) {
    console.log(`Maj`);
  } else if (n % 12 == 5) {
    console.log(`Jun`);
  } else if (n % 12 == 6) {
    console.log(`Jul`);
  } else if (n % 12 == 7) {
    console.log(`Avgust`);
  } else if (n % 12 == 8) {
    console.log(`Septembar`);
  } else if (n % 12 == 9) {
    console.log(`Oktobar`);
  } else if (n % 12 == 10) {
    console.log(`Novembar`);
  } else if (n % 12 == 11) {
    console.log(`Decembar`);
  }
}
mesec(200);

// 7. ZADATAK Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”). Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
// Nikola

let date = new Date();                          
let vreme = date.getDay();
function sedmiDan(n) {
    n = n % 7;
  switch (n) {
    case 0:
      console.log("Danas je nedelja");
      break;
    case 1:
      console.log("Danas je ponedeljak");
      break;
    case 2:
      console.log("Danas je utorak");
      break;
    case 3:
      console.log("Danas je sreda");
      break;
    case 4:
      console.log("Danas je cetvrtak");
      break;
    case 5:
      console.log("Danas je petak");
      break;
    case 6:
      console.log("Danas je subota");
      break;
    default:
      console.log("Pogresan unos");
  }
}
sedmiDan(vreme);

// 8. ZADATAK
/*
Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.
*/
function deljivSaTri(n, m) {
    let br = 0;
    for(let i=n; i<=m; i++) {
        if(i%3 == 0) {
            console.log(i);
            br++; // br+=1; // br=br+1;
        }
    }
    console.log(`Broj brojeva deljivih sa 3 u intervalu od ${n} do ${m} je ${br}`);
} 
deljivSaTri(10, 30);

// 14. Zadatak
// Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
//Vladan
function petPuta(recenica, boja){
    for(let i = 1; i<= 5; i++){
        document.body.innerHTML += `<p style="font-size:${i*10}px; color:${boja}">${recenica}</p>`;
    }
}
petPuta("Neki paragraf", "blue");

// 15.
// Kolika je plata poslednjeg meseca
// Bojan
function praksa(n, a, d) {
    for (let i = 2; i <= n; i++) {
      a += d;
    }
    return a;
  }
let praksa1 = praksa(5, 1000, 150);
console.log(praksa1);

// Aleksandar
function praksa_aleksandar(n, a, d) {
    let suma = a;         // da izbegnemo   if (i==1)   jer prvog meseca nema povisice
    for (let i = 1; i <= n; i++) {
        if (i >= 2) {
            suma += a + d ; // povisica (d)
        }
    }
    return suma;
}
// n = meseci rada
// a = plata
// d = povisica
let p = praksa_aleksandar(3, 50000, 5000);
console.log(p);

// Jelena
let n = 3;
let a = 5000;
let d = 200;
// 1. mesec - 5000
// 2. mesec - 5000+200
// 3. mesec - 5000+200

// Koliko ukupno novca primamo
let ukupno = a*n + d*(n-1); // plate + povišice
let ukupno1 = n*(a+d) - d; // plate sa povišicama - 1. mesec kada nemam povišicu
let ukupno2 = a + (n-1)*(a+d); // plata za 1. mesec + plata za preostalih n-1 meseci

// 16.
// Milica i Kristina
function vreme(t, p, n) {
  let čekaj = n + p - t;
  if (p > t || t >= p + n) {
      console.log(`Burke samo piči`);
  }
  else {
      console.log(`Burke treba da krene kroz ${čekaj} sec da ne bi čekao most`);
  }
}
vreme(11, 10, 160);






