console.log("Ugnježdeno grananje");
// 19. 
// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.

let b1 = 5;
let b2 = 2;
let b3 = 4;

if(b1 > b2) {
    if(b1 > b3) {
        console.log(`Broj ${b1} je najveći`);
        if(b2 > b3) {
            console.log(`Broj ${b2} je srednji`);
            console.log(`Broj ${b3} je najmanji`);
        }
        else {
            console.log(`Broj ${b3} je srednji`);
            console.log(`Broj ${b2} je najmanji`);
        }
    }
    else {
        console.log(`Broj ${b1} je srednji`);
        if(b2 > b3) {
            console.log(`Broj ${b2} je najeći`);
            console.log(`Broj ${b3} je najmanji`);
        }
        else {
            console.log(`Broj ${b2} je najmanji`);
            console.log(`Broj ${b3} je najveći`);
        }
    }
}