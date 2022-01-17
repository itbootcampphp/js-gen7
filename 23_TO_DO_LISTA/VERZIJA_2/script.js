// DOM
let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");

inputTask.addEventListener("keyup", e => {
    e.preventDefault();
    // console.log(e.key, e.keyCode); // Ključ za ENTER je 13

    if(e.keyCode == 13) {
        let inputTaskValue = inputTask.value; // Uzimam vrednost iz input polja
        inputTaskValue = inputTaskValue.trim();

        if(inputTaskValue == "" || inputTaskValue == null) {
            alert("Morate uneti tekst zadatka");
        }
        else {
            let liNewTask = document.createElement("li"); // Kreiral novi <li>
            liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst

            let radioAdd = document.querySelector("input[name=add]:checked");
            // console.log(radioAdd.id, radioAdd.value);
            if( radioAdd.value == "beggin" ) {
                ulTasks.prepend(liNewTask); // Dodavanje na početak - Dodajemo <li> čvor na početak <ul>
            }
            else {
                ulTasks.appendChild(liNewTask); // Dodavanje na kraj - Dodajemo <li> čvor na kraj <ul>
            }

            inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>
        }
    }
});

ulTasks.addEventListener("click", e => {
    // console.log("Kliknuto na UL");
    // console.log(e.target); // Vraća ceo tag i njegovu decu
    // console.log(e.target.tagName); // Vraća samo ime taga na koji je kliknuto
    if(e.target.tagName == "LI") {
        // console.log("Kliknuto na LI");
        e.target.remove();
    }
});

// trim
let tekst = "    Neki      tekst     ";
console.log(tekst);
console.log(tekst.trim()); // .trim() funkcija sklanja praznine sa početka i kraja stringa

tekst = "      ";
console.log(tekst);
console.log(tekst.trim());
