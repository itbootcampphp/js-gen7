import {zdravo, ime} from "./moduli/zdravo.js";

// ime = "Zdravko"; - nije moguce menjati vrednosti promenljivih iz modula
//let ime = "Glisa"; //- nije moguce imati "lokalnu" promenljivu sa istim imenom 
zdravo("Pera");
console.log(ime);