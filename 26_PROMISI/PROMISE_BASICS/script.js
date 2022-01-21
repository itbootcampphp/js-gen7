let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        // resolve("Nešto resolve"); // Sve ok prošlo onda je resolve
        reject("Nešto reject"); // Nešto nije ok prošlo
    });
    // console.log(obj);
    return obj; // vraća Promise objekat
}
// Ako je promise vratio resolve, realizuje se .then() grana
// Ako je promise vratio reject, realizuje se .catch() grana
getSomething().then(a => {
    console.log(`Aktivirana je .then grana ${a}`); // a dobija vrednost one poruke koja se prosleđuje u resolve
}).catch(b => {
    console.log(`Aktivirana je .catch grana ${b}`); // b dobija vrednost one poruke koja ase prosleđuje u reject
})