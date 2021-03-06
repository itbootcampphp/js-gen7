let cars = ["Toyota", "BMW", "Volvo"];

console.log(cars);

let numbers = [6, -7, 0, 5.5, -3.14];
console.log(numbers);

let random = [6, "Stefan", -8.8, true, [1, 2, 3]];
console.log(random);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

console.log(random[4][1]);

cars[0] = "Peugeot";
console.log(cars);

// cars[0] = undefined; - ovo je nacin da se ukloni element iz niza

for(let i = 0; i < cars.length; i++)
{
    console.log(cars[i]);
}

// 2. Odrediti zbir elemenata celobrojnog niza
let niz = [1, 8, 11, 5, 2];
let niz2 = [6, -9, 0, 0, 3];
let niz3 = [1, 4];

let sumaElemenata = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++)
    {
        suma = suma + niz[i];
    }
    return suma; 
}

console.log("Suma elemenata prvog niza je: " + sumaElemenata(niz));
console.log("Suma elemenata drugog niza je: " + sumaElemenata(niz2));
console.log("Suma elemenata treceg niza je: " + sumaElemenata(niz3));

// 3. Odrediti proizvod elemenata celobrojnog niza 

let proizvodElemenata = niz => {
    let proizvod = 1;
    for(let i = 0; i < niz.length; i++)
    {
        //proizvod = proizvod * niz[i];
        proizvod *= niz[i];
    }
    return proizvod;
}
console.log(proizvodElemenata(niz2));
console.log(proizvodElemenata(niz3));


// 4. Odrediti srednju vrednost elemenata celobrojnog niza

let arSr = niz => {
    let suma = 0;
    let broj = 0;
    for(let i = 0; i < niz.length; i++)
    {
        suma += niz[i];
        broj++;
    }
    return (broj != 0) ? suma / broj : 0;
}

let arSr2 = niz => {
    let suma = sumaElemenata(niz);
    let broj = niz.length;
    return (broj != 0) ? suma / broj : 0;
}

let arSr3 = niz => (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;

console.log(arSr3(niz));
console.log(arSr3(niz2));
console.log(arSr3(niz3));
console.log(arSr3([]));

// 4'. Odrediti srednju vrednost parnih elemenata niza

let arSrParnih = niz => {
    let suma = 0;
    let broj = 0;
    for(let i = 0; i < niz.length; i++)
    {
        if(niz[i] % 2 == 0)
        {
            suma += niz[i];
            broj++;
        }
    }
    return broj == 0 ? 0 : suma / broj;
}

console.log(arSrParnih(niz2));
console.log(arSr([1, 2, [1, 2, 3]]));

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVrednost = niz => {
    let max = niz[0];
    for(let i = 1; i < niz.length; i++)
    {
        if(niz[i] > max)
        {
            max = niz[i];
        }
    }
    return max;
}

console.log(maxVrednost(niz));
/*
Ulaz: niz = [1, 11, 6, 11]
max = 1
i    |   niz[i]   |   max
---------------------------
1    |    11      |   11
2    |    6       |   11
3    |    11      |   11
*/

/*
Ulaz: niz = [1, 8, 11, 5, 2]

max = 1

i  |  niz[i]   |  max
------------------------
1  |    8      |   8
2  |   11      |  11
3  |   5       |  11
4  |   2       |  11
*/

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.

let minVrednost = niz => {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++)
    {
        if(niz[i] < min)
        {
            min = niz[i];
        }
    }
    return min;
}

// 16. Dat je niz stavki za kupovinu (??lanovi niza su stringovi). Prolaskom kroz niz napraviti neure??enu listu i ispisati je u html dokument.

let lista = ["hleb", "mleko", "sir", "secer", "brasno"];

let ispisLista = niz => {
    let rezultat = "<ul>";
    for(let i = 0; i < niz.length; i++) {
        rezultat += `<li>${niz[i]}</li>`;
    }
    rezultat += "</ul>";
    return rezultat;
}

//document.body.innerHTML += ispisLista(lista);
document.getElementById('d1').innerHTML += ispisLista(lista);

// 19. Ispisati du??inu svakog elementa u nizu stringova. 

let duzinaEl = niz => {
    for(let i = 0; i < niz.length; i++) {
        console.log(niz[i].length);
    }
}

let imena = ["Stefan", "Aleksandar", "Kristian", "Bogdan", "Pavle", "Nikola"];
duzinaEl(imena);

// 20. Odrediti element u nizu stringova sa najve??om du??inom.

let stringMaxDuzine = niz => {
    let maxDuzina = niz[0].length; // pp. da je prvi element niza najduzi
    let maxString = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i].length > maxDuzina) {
            maxDuzina = niz[i].length;
            maxString = niz[i];
        }
    }
    return maxString;
}

console.log(stringMaxDuzine(imena));

// 21. Odrediti broj elemenata u nizu stringova ??ija je du??ina ve??a od prose??ne du??ine svih stringova u nizu.

let prosDuzina = niz => {
    let suma = 0;
    let broj = 0;
    for(let i = 0; i < niz.length; i++) {
        suma = suma + niz[i].length;
        broj++;
    }
    return broj != 0 ? suma / broj : 0;
}

let brojVeciProsDuz = niz => {
    let broj = 0;
    let pd = prosDuzina(niz);
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].length > pd) {
            broj++;
        }
    }
    return broj;
}

console.log(prosDuzina(imena));
console.log(brojVeciProsDuz(imena));

// 22. Odrediti broj elemenata u nizu stringova koji sadr??e slovo 'a???. 

let brojSadrziA = niz => {
    let broj = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].includes("a")) {
            broj++;
        }
    }
    return broj;
}

console.log(brojSadrziA(imena));

// 22'. Odrediti broj pojavljivanja slova 'a' u nizu stringova.

let brojKarakreraA = niz => {
    let broj = 0;
    for(let i = 0; i < niz.length; i++) {
        // niz[i] je string
        let element = niz[i];
        // Sada prolazimo kroz sve karaktere stringa element
        for(let j = 0; j < element.length; j++) {
            if(element[j] == "a") {
                broj++;
            }
        }
    }
    return broj;
}

console.log(brojKarakreraA(imena));

// Zadatak 24

let a = [1, 4, 7, -5];
let b = [6, 6, 0, 9];

let zad24 = (a, b) => {
    let c = [];
    for(let i = 0; i < a.length; i++)
    {
        c[2 * i] = a[i]; // c[0] = a[0], c[2] = a[1], c[4] = a[2], c[6] = a[3]
        c[2 * i + 1] = b[i]; // c[1] = b[0], c[3] = b[1], c[5] = b[2], c[7] = b[3]
    }
    return c;
}

let zad24DN = (a, b) => {
    let c = [];
    let m = Math.min(a.length, b.length);
    for(let i = 0; i < m; i++)
    {
        c.push(a[i]); 
        c.push(b[i]); 
    }
    for(let i = m; i < a.length; i++)
    {
        c.push(a[i]);
    }
    for(let i = m; i < b.length; i++)
    {
        c.push(b[i]);
    }
    return c;
}

let res = zad24(a, b);
console.log(res);