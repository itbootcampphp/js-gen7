let a = [1, 9, -6, 5, 0];
let b = [7, 8, 9];
/*
function ispis(elem) {
    console.log(`Element niza je: ${elem}`);
}

a.forEach(ispis);
*/

a.forEach(elem => {
    console.log(`Element: ${elem}`);
});

// Odrediti zbir celobrojnog niza

let zbir = (niz) => {
    let s = 0;
    niz.forEach(el => {
        s += el;
    });
    return s;
};

let zbirParnih = (niz) => {
    let s = 0;
    niz.forEach(el => {
        if(el % 2 == 0) {
            s += el;
        }
    });
    return s;
};

let zbirElParniIndex = (niz) => {
    let s = 0;
    niz.forEach((el, index) => {
        if(index % 2 == 0) {
            s += el;
        }
    });
    return s;
};

console.log(zbir(a));
console.log(zbir(b));
console.log(zbirParnih(a));
console.log(zbirElParniIndex(a));

// Odrediti indeks maksimalnog elementa celobrojnog niza.
let indexMax = niz => {
    let max = niz[0];
    let imax = 0;
    niz.forEach((el, i) => {
        if(el > max) {
            max = el;
            imax = i;
        }
    });
    return imax;
}

console.log(indexMax(a));

function maxEl(niz) {
    let max = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}

function minEl(niz) {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}

let indexSvojstvo = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let index;
    niz.forEach((el, i) => {
        if(el == s) {
            index = i;
        }
    });
    return index;
}

console.log(indexSvojstvo(a, maxEl));
console.log(indexSvojstvo(a, minEl));