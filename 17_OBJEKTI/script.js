console.log("Objekti");

let blog1 = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tagovima",
    author: "Jelena"
};

console.log(blog1);
console.log(typeof blog1);

// ispis propertija na dva načina
console.log(blog1.title);
console.log(blog1['title']);

// izmene propertija na dva načina
blog1.title = "Osnove HTML-a";
console.log(blog1);
blog1["author"] = "Jelena Matejić";
console.log(blog1);

/////////////////////////////////////

let user = {
    username: "JM",
    age: 27,
    blogs: ["IF naredba grananja", "WHILE petlja", "FOR petlja"],
    login: function() {
        console.log("Ulogovani ste");
    },
    logout: function() {
        console.log("Izlogovani ste");
    },
    logBlogs: function() {
        console.log(this);
        console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

console.log(user);
console.log(user.blogs);

let nasloviBlogova = user.blogs;
for(let i=0; i<nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`;
}

for(let i=0; i<user.blogs.length; i++) {
    document.body.innerHTML += `<h4>${user.blogs[i]}</h4>`;
}

// Poziv metoda
user.login();
user.login();
user.logout();

// Poziv metoda koji u sebi sadrži poziv nekog propertija 
// this
user.logBlogs();
console.log(this);

///////////////////////////////////

let dan = {
    datum: "2021/12/23",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [-16, -13, -5, -1, -0, -4, -11, -10],
    // temperature: [23,44,55,32],
    //1.
    prosek: function(){
        let suma = 0;
        let element = this.temperature;
        element.forEach(el=>{
            suma+= el;
        });
        console.log(suma /element.length);
    },
    //2.
    iznadProseka: function (){
        let element = this.temperature;
        let br = 0;
        let suma = 0;
        for(let i =0; i< element.length; i++){
            suma+= element[i];
            if(element[i] > suma /element.length){
                br++;
            }
        }
        return br;
    },
    //3.
    maximum: function(){
        let element = this.temperature;
        let br = 0;
        let max = element[0];
        for (let i = 1; i< element.length; i++) {
            if(element[i] >= max){
                max = element[i];
            };  
        }
        for(let i = 1; i< element.length; i++){
            if(max == element[i]){
                br++;
            }
        };
        console.log(`Bilo je ${br} merenja sa maximalnom temperaturom.`);
    },
    //4.
    between: function(a,b){
        let element = this.temperature;
        let br = 0;
        element.forEach(el=>{
            if(a < el && el < b){
                br++;
            }
        });
        console.log(`Postoji ${br} temperatura izmedju ${a} i ${b}.`);
    },
    //5.
    toplo: function(){
        // if(this.iznadProseka() > this.temperature.length/2){
        //     return true;
        // }else{
        //     return false;
        // }
        return (this.iznadProseka() > this.temperature.length/2);
    },
    //6.Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    leden: function(){
        for(let i=0; i<this.temperature.length; i++){
            if(this.temperature[i] > 0){
                return false;
            }
        }
        return true;

        // 2. način
        // let rez = true;
        // this.temperature.forEach(el => {
        //     if (el > 0) {
        //         rez=false;
        //     }
        // })
        // return rez;

        // 3. način
        // let br = 0;
        // this.temperature.forEach(temp => {
        //     if (temp > 0) {
        //         br++;
        //     }
        // });
        // return br == 0;

    }
};

// 6.
console.log(dan.leden());