console.log("Logički operatori");

// 1. negacija
// 2. and
// 3. or
//if(!true && true || falase) -> (false && true || false) -> (false || falase) -> false
//if( (!true && true) || falase)

let pol = "z";
let god = -27;

if( pol=="m" && god>=18) {
    console.log("Osoba je muškog pola i punoletna je");
}
else if( pol=="m" && god<18 && god>=0) {
    console.log("Osoba je muškog pola i maloletna je");
}
else if( pol=="z" && god>=18) {
    console.log("Osoba je ženskog pola i punoletna je");
}
else if( pol=="z" && god<18 && god>=0) {
    console.log("Osoba je ženskog pola i maloletna je");
}
else {
    console.log("Pogrešan unos");
}

////////////////////////////////

pol = "p";
if(pol=="z" || pol=="Z" || pol=="ž" || pol=="Ž") {
    document.body.innerHTML += `<img src="slike/z.png">`;
}
else if(pol=="m" || pol=="M") {
    document.body.innerHTML += `<img src="slike/m.png">`;
}
else {
    document.body.innerHTML += `<p>Pogrešan unos</p>`;
}

document.body.innerHTML += "Hello";


////////////////////////////////

pol = "Z";
god = 15;
if( (pol=="z" || pol=="Z" || pol=="ž" || pol=="Ž") && god>=18 ) {
    console.log("Osoba je ženskog pola i punoletna je");
}
// 0<=god<18 NEEEEE!!!!! -> 0<=god && god<18 odnosno god>=0 && god<18
else if( (pol=="z" || pol=="Z" || pol=="ž" || pol=="Ž") && god>=0 && god<18) {
    console.log("Osoba je ženskog pola i maloletna je");
}
else if( (pol=="m" || pol=="M") && god>=18) {
    console.log("Osoba je muškog pola i punoletna je");
}
else if( (pol=="m" || pol=="M") && god>=0 && god<18 ) {
    console.log("Osoba je muškog pola i maloletna je");
}
else {
    console.log("Pogrešan unos");
}