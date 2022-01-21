let getTodos = (resource, callback) => {
    // 1. Kreiranje XML objekta
    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState == 4 && request.status == 200) {
            // Sve OK
            // console.log(request.responseText);
            callback(request.responseText, undefined);
        }
        else if(request.readyState == 4) {
            // Nešto nije OK
            // console.log("Ne mogu da dohvatim podatke");
            callback(undefined, "Ne mogu da dohvatim podatke");
        }
    });

    // 2. Otvaranje kreiranog zahteva
    request.open('GET', resource);

    // 3. Šaljemo zahtev
    request.send();
}

getTodos('../JSON/todos.json', (data, err) => {
    console.log("callback okinuta");
    // Ako je err == true, ispisati tu grešku
    if(err) {
        console.log(err); // Ispisuje ako je došlo do greške u todos.json fajlu
    }
    else {
        console.log(data); // Ispisuje podatke iz todos.json fajla

        // Nakon što su se ispisali podaci iz todos.json, pozivamo sledeći fajl fruits.json
        getTodos('../JSON/fruits.json', (data, err) => {
            if(err) {
                console.log(err); // Ispisuje ako je došlo do greške u frits.json fajlu
            }
            else {
                console.log(data); // Ispisuje podatke iz fruits.json fajla

                // Nakon što je učitao prethodni fajl fruits.json, pozivamo sledeći fajl vegetables.json
                getTodos('../JSON/vegetables.json', (data, err) => {
                    if(err) {
                        console.log(err); // Ispisuje ako je došlo do greške u vegetables.json fajlu
                    }
                    else {
                        console.log(data); // Ispisuje podatke iz vegetables.json fajla
                    }
                });
            }
        });
    }
});

console.log("KRAJ");


