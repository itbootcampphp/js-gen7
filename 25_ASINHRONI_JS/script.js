let request = new XMLHttpRequest();
/*
request.addEventListener('readystatechange', () => {
    if(request.readyState == 1) {
        console.log("Uspostavljena konekcija");
    }
    else if(request.readyState == 2) {
        console.log("Poslat je zahtev serveru");
    }
    else if(request.readyState == 3) {
        console.log("Prihvata se odgovor - u statusu preuzimanja");
    }
    else if(request.readyState == 4) {
        console.log("Odgovor je preuzet: ", request.responseText);
    }
});
*/
request.addEventListener('readystatechange', function() {
    if(this.readyState === 4 && this.status === 200) {
        //console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        console.log(data);
    }
    else if(this.readyState === 4) {
        console.log("could not fetch data");
        console.log(this.responseText);
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();

console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);


let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function() {
        if(this.readyState === 4 && this.status === 200) {
            // radi nesto kada je sve u redu
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if(this.readyState === 4) {
            // radi nesto kada je doslo do greske
            reject("Doslo je do greske!");
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.send();
}

let zad2 = (niz) => {
    niz.forEach(kor => {
        if(kor.website.includes(".com")) {
            console.log(kor.name);
        }
    });
}

let zad3 = (niz) => {
    niz.forEach(kor => {
        if(kor.name.includes("Clementin")) {
            console.log(kor.name);
        }
    });
}

let zad5 = (niz) => {
    let gradovi = [];
    niz.forEach(kor => {
        if( !gradovi.includes(kor.address.city) ) {
            gradovi.push(kor.address.city);
        }
    });
    console.log(gradovi);
}

let ispisPorukeStranica = (poruka) => {
    document.body.innerHTML += `<p class='error'>${poruka}</p>`;
}

let ispisPorukeKonzola = (poruka) => {
    console.log(poruka);
}

getUsers(zad2, ispisPorukeStranica);
getUsers(zad3, ispisPorukeKonzola);
getUsers(zad5, ispisPorukeStranica);

getUsers(
    (niz) => {
        niz.forEach(kor => {
            if(kor.company.name.includes("Group") || kor.company.name.includes("LLC"))
            {
                console.log(kor.name);
            }
        });
    }, 
    (poruka) => {
        document.body.innerHTML += `<p class='error'>${poruka}</p>`;
    }
);