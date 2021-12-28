console.log(document);
console.log(typeof document);

console.log(document.body);
console.log(typeof document.body);

let p1 = document.getElementById("p1");
console.log(p1);
console.log(typeof p1);

let cont = document.getElementsByClassName("container");
console.log(cont);
console.log(typeof cont);

for(let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

let contNiz = Array.from(cont);
contNiz.forEach(elem => {
    console.log(elem);
});

let paragrafi = document.getElementsByTagName("p");
for(let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
}

let linkovi = document.getElementsByName("link");
for(let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
}

p1 = document.querySelector("#p1");
console.log(p1);

cont = document.querySelector(".container");
console.log(cont);

cont = document.querySelectorAll(".container");
console.log(cont);

for(let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

cont.forEach(elem => {
    console.log(elem);
});

paragrafi = document.querySelectorAll("p");
console.log(paragrafi);

linkovi = document.querySelectorAll("[name='link']");
console.log(linkovi);

p1.innerHTML += "Promenjen <span>tekst</span> paragrafa";

let sviLinkovi = document.querySelectorAll("a");

sviLinkovi.forEach(link => {
    // HTML atributi
    link.href = "https://www.google.com";
    link.target = "_blank";

    // CSS stilovi
    link.style.color = "green";
    link.style.textDecoration = "none";

    //link.style = "color: green; text-decoration: none;";

    // Preko metode
    link.setAttribute('name', 'link2'); // isto kao i link.name = "link2";
    link.setAttribute("style", "color: green; text-decoration: none;"); // isto kao i link.style = "...";
});


// Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.

let imena = ["Stefan", "Marija", "Nikola", "Bogdan", "Vladan"];
imena.forEach(ime => {
    if(ime.startsWith("S")) { //if(ime[0] == "S") {
        document.body.innerHTML += `<a href="#" target="_blank">${ime}</a>`;
    }
    else {
        document.body.innerHTML += `<a href="#">${ime}</a>`;
    }
});

// U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
let listaString = "<ul>";
imena.forEach((ime, i) => {
    if(i % 2 == 0) {
        listaString += `<li style="color: red">${ime}</li>`;
    }
    else {
        listaString += `<li style="color: blue">${ime}</li>`;
    }
});
listaString += "</ul>";
document.body.innerHTML += listaString;