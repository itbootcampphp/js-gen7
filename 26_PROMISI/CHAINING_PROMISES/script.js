let getTodos = resource => {
    // 1. Kreiranje XML objekta
    let request = new XMLHttpRequest();

    // 2. Otvaranje kreiranog zahteva
    request.open('GET', resource);

    // 3. Šaljemo zahtev
    request.send();

    // Vraćam objekat Promise
    return new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if(request.readyState == 4 && request.status == 200) {
                // Sve OK
                // console.log(request.responseText);
                // callback(request.responseText, undefined);
                resolve(request.responseText);
            }
            else if(request.readyState == 4) {
                // Nešto nije OK
                // console.log("Ne mogu da dohvatim podatke");
                // callback(undefined, "Ne mogu da dohvatim podatke");
                reject("Ne mogu da dohvatim podatke");
            }
        });
    });    
}

// 1. da se učita dotos.json fajl
// 2. da se učita fruits.json fajl
// 3. da se učita vegetables.json fajl

getTodos("../JSON/todos.json").then(data => {
    console.log("Promise todos resolved", data);
    return getTodos("../JSON/fruits.json"); // vraćam Promise na koji se odnosi naredni then
}).then(data => {
    console.log("Promise fruits resolved", data);
    return getTodos("../JSON/vegetables.json"); // vraćam Promise na koji se odnosi naredni then
}).then(data => {
    console.log("Promise vegetables resolved", data);
}).catch(err => {
    console.log("Promise rejected", err);
});

console.log("KRAJ");


