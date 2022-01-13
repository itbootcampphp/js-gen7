import { Pacijent } from "./pacijent.js";

let p1 = new Pacijent("Jelena", 1.73, 66);
let p2 = new Pacijent("Ana", 1.8, 72);
let p3 = new Pacijent("Pera", 1.9, 140);
let p4 = new Pacijent("Mika", 1.67, 57);
let p5 = new Pacijent("Mila", 1.5, 70);

let pacijenti = [p1, p2, p3, p4, p5];

// Ispisati podatke o pacijentu sa najmanjom težinom
let btnMinTez = document.getElementById("minTez");
let spanMinTezRez = document.getElementById("minTezRez");
btnMinTez.addEventListener("click", () => {
    let min = pacijenti[0]; // pacijenti[0] je objekat, a pacijenti[0].tezina je težina pacijenta
    pacijenti.forEach(p => {
        if(min.težina > p.težina) {
            min = p;
        }
    });
    spanMinTezRez.innerHTML = min.stampajListu();
    //console.log(min);
    //min.štampaj();
});

// Ispisati podatke o pacijentu sa najvećom bmi vrednošću
let btnMaxBMI = document.querySelector("#maxBMI");
let maxBMIres = document.querySelector("#maxBMIrez");

btnMaxBMI.addEventListener("click", () => {
    let maxBMI = pacijenti[0]; // Pretpostavka je da prvi pacijent ima max BMI
    for(let i=1; i<pacijenti.length; i++) {
        if(maxBMI.bmi() < pacijenti[i].bmi()) {
            maxBMI = pacijenti[i];
        }
    }
    maxBMIres.innerHTML = maxBMI.stampajListu();
});

