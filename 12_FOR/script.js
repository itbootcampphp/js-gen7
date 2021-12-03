// let a = 1;
// while(a <= 5){
//     console.log(`Na redu je broj ${a}`);
//     a++;
// }

// 1.
// for(let i=1;i<=5; i++){
//     console.log(`For petlja iteracija ${i}`);
// }

//2.
// i=1;
// for(i;i<=5; i++){
//     console.log(`For petlja iteracija ${i}`);
// }

//3.
// i=1;
// for(;i<=5; i++){
//     console.log(`For petlja iteracija ${i}`);
// }

//////////////////////

// for(let i=1, k=5; i<=k; i++) {
//     console.log(i);
// }

/////////////////////////////////

console.log("2. Ispisati brojeve od 20 do 1");
// for(i=20; i>=1; i--) {
//     console.log(i);
// }

/////////////////////////////////

console.log("3. Ispisati parne brojeve od 1 do 20");

// 1. način
// for(i=1; i<=20; i++) {
//     if(i%2 == 0) {
//         console.log(i);
//     }
// }

// // 2. način
// for(i=2; i<=20; i+=2) {
//     console.log(i);
// }

// // 3. način
// for(i=2; i<=20; i=i+2) {
//     console.log(i);
// }

/////////////////////////////////

console.log("5. Odrediti sumu brojeva od 1 do n");
// let n = 100;
// let suma = 0;
// for(i=1; i<=n; i++) {
//     suma += i; // suma = suma + i;
// }
// console.log(suma);

///////////////////////////////

// console.log("7. Odrediti proizvod brojeva od n do m");
// let n = 2;
// let m = 6;
// let p = 1;
// for(i=n; i<=m; i++) {
//     p *= i; // p = p * i;
// }
// console.log(`Proizvod brojeva od ${n} do ${m} je ${p}`);

//////////////////////////////

// Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
// <img src="slike/1.jpg">
// <img src="slike/2.jpg">
// <img src="slike/3.jpg">
// for(let i=1; i<=3; i++) {
//     document.body.innerHTML += `<img src="slike/${i}.jpg">`;
// }

////////////////////////////

// 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
// let br = 0;
// for(let i=5; i<=150; i++) {
//     if(i%13 == 0) {
//         br++;
//     }
// }
// console.log(`U intervalu od 5 do 150 ima ${br} brojeva deljivih sa 13`);

////////////////////////////

// 12. Ispisati aritmetičku sredinu brojeva od n do m.
// let n = 5;
// let m = 10;
// let suma = 0;
// let br = 0;
// for(let i=n; i<=m; i++) {
//     suma += i; // suma = suma + i;
//     br++; // br += 1; // br = br + 1;
// }
// let arsr = suma / br; // 45 / 6
// console.log(`Aritmetička sredina brojeva od ${n} do ${m} je ${arsr}`);

////////////////////////////

// 15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
// 426 % 10  = 6
// 9465 % 10 = 5
// 41 % 10 = 1

// let n = 3;
// let m = 45;
// let br = 0;
// let suma = 0;

// for(let i=n; i<=m; i++) {
//     if( i%10 == 4 ) {
//         console.log(i);
//         suma = suma + i; // suma += i;
//         br++;
//     }
// }

// console.log(`Broj brojeva između ${n} i ${m} kojima je poslednja cifra 4 je ${br}`);
// console.log(`Suma brojeva između ${n} i ${m} kojima je poslednja cifra 4 je ${suma}`);

////////////////////////////

// 16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

// let n = 5;
// let m = 10;
// let a = 3;
// let suma = 0;
// for(let i=n; i<=m; i++) {
//     if(i%a != 0) {
//         suma += i; // suma = 0; suma = 5; suma = 12; suma = 20; suma = 30;
//     }
// }
// console.log(`Suma brojeva od ${n} do ${m}, koji nisu deljivi brojem ${a} je ${suma}`);

////////////////////////////


// 18. Odrediti sa koliko brojeva je deljiv uneti broj k
// FOR petljom
let k = 6;
let br = 0;
for(let i=1; i<=k; i++) {
    if(k%i == 0) {
        br++;
        // console.log(i);
    }
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva`);

// WHILE petljom
k = 4;
br = 0;
i = 1;
while(i <= k) {
    if(k%i == 0) {
        br++;
    }
    i++;
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva`);

// 19. Odrediti da li je dati prirodan broj k prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
// Samo se nadovezujemo na prethodni zadatak
if(br == 1) {
    console.log(`Broj nije ni prost ni složen`);
} 
else if(br == 2) {
    console.log(`Broj je prost`);
}
else {
    console.log(`Broj je složen`);
}

// 20.
let tabela = `<table border="1">`;
for(let red=1; red<=6; red++) {
    if(red%2==0){
        tabela += 
        `
        <tr class="roze">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
        `;
    }
    else {
        tabela += 
        `
        <tr>
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
        `;
    }
}
tabela += `</table>`;
document.body.innerHTML += tabela;
