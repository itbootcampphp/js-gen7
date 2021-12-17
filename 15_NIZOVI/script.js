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
