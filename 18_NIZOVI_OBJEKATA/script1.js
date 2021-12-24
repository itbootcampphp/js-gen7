let blog1 = {
    title: "Osovni HTML tagovi",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osovni CSS selektori",
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};

let blog4 = {
    title: "Uvod u JS",
    likes: 150,
    dislikes: 50
};

let blog5 = {
    title: "IF naredba grananja",
    likes: 250,
    dislikes: 160
};

let user1 = {
    username: "JelenaMatejic",
    age: 27,
    blogs: [blog1, blog2, blog3],
    myLikes: function() {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.likes;
        });
        return s;
    }
};

let user2 = {
    username: "StefanStanimirovic",
    age: 32,
    blogs: [blog4, blog5],
    myLikes: function() {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.likes;
        });
        return s;
    }
};

// Ispis
console.log(user1.username);

// Podaci o prvom blogu korisnika 1
console.log(user1.blogs[0]);

// Naslov prvog bloga korisnika 1
console.log(user1.blogs[0].title);

// 1. ZADATAK
// Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
// Niz korisnika
let users = [user1, user2];

// Ko su autori blogova?
users.forEach(u => {
    console.log(u.username);
});

// Ispisati sve naslove blogova koje su napisali autori iz niza users
users.forEach(u => {
    // U je jedan user iz niza
    let blogsU = u.blogs; // Svi blogovi tekućeg korisnika U
    blogsU.forEach(b => {
        console.log(b.title);
    });
});

// 2. ZADATAK
console.log("Ispisati imena onih autora koji imaju ispod 30 godina");
users.forEach( u => {
    if(u.age < 30) {
        console.log(u.username);
    }
});

// 3. ZADATAK
console.log("Ispisati naslove onih blogova koji imaju više od 50 lajkova");
users.forEach(u => {
    let blogsU = u.blogs; //niz blogova tekućeg korisnika U
    blogsU.forEach(b => {
        if(b.likes > 50) {
            console.log(b.title);
        }
    });
});

// 4. ZADATAK
// Vladan
console.log("Ispisati sve blogove autora čiji je username ’StefanStanimirovic’");
users.forEach(u =>{
    if(u.username === "StefanStanimirovic"){
        let blogU = u.blogs;
        blogU.forEach(e=>{
            console.log(e.title);
        });
    }
});

// 5. ZADATAK
console.log("Ispisati imena onih autora koji imaju ukupno više od 200 lajkova za blogove koje su napisali");
// 1. način
users.forEach(u => {
    let sumaLajkovaU = 0; // suma lajkova jednog user-a
    // Krećem se od bloga do bloga korisnika u
    u.blogs.forEach(b => {
        sumaLajkovaU += b.likes;
    });
    if(sumaLajkovaU > 200) {
        console.log(u.username);
    }
});

// 2. način
users.forEach(u => {
    if(u.myLikes() > 200) {
        console.log(u.username);
    }
});

// 6.
console.log("Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena");
// Jelena likes: 30 50 70 (avg. likes Jelena (30+50+70)/3 = 50)
// Stefan likes: 150 250 (avg. likes Stefan (150+250)/2 = 200)

// GLOBALNI prosek: (30 + 50 + 70 + 150 + 250) / 5 = 550 / 5 = 110

// NIJE ISTO što i (Jelenin prosek lajkova + Stefanov prosek lajova) / 2 = (50+200)/2 = 125

let globalAvgLikes = arr => {
    let globalSum = 0; // Suma svih lajkova svih korisnika
    let globalBr = 0; // Broj blogova svih korisnika
    arr.forEach(u => {
        globalSum += u.myLikes(); // Dodaj koliko je pojedinačni korisik imao ukupno lajkova za sve svoje blogove
        globalBr += u.blogs.length; // Dodaj koliko je pojedinačni korisnik imao blogova
    });
    return globalSum/globalBr;
}
console.log(`Globalan prosek lajkova je ${globalAvgLikes(users)}`);

let blogoviSaNatprosecnoLakova = arr => {
    let globalAvg = globalAvgLikes(arr);
    arr.forEach( u => {
        u.blogs.forEach( b => {
            if(b.likes >globalAvg) {
                console.log(b.title);
            }
        });
    });
}
console.log(`Ispis naslova blogova sa natprosečnim brojem lajkova`);
blogoviSaNatprosecnoLakova(users);
