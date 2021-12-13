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