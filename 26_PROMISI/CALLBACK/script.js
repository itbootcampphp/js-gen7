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
        console.log(err); // Ispisuje grešku
    }
    else {
        console.log(data); // Ispisuje podatke sa kojima može dalje da raspolaže
        
    }
});

console.log("KRAJ");


