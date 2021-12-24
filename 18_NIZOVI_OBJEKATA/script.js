console.log("Nizovi objekata");

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

let arrBlogs = [blog1, blog2, blog3];

// Ispis objekata iz niza pomoću foreach petlje
arrBlogs.forEach( objekatBlog => {
    console.log(objekatBlog);
});

arrBlogs.forEach( objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`;
    document.body.innerHTML += `<p>Likes: ${objekatBlog.likes}</p>`;
    document.body.innerHTML += `<p>Dislikes: ${objekatBlog.dislikes}</p>`;
});

// Ispis objekata iz niza pomoću for petlje
for(let i=0; i<arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}

// Promena vrednosti elementa
// blog3.title = "Napredni HTML tagovi";
// console.log(arrBlogs);

// arrBlogs[2].title = "HTML5 tagovi";
// console.log(arrBlogs);

// VEŽBANJE

// 1. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let sumLikes = arr => {
    let sum = 0;

    // 1. način
    // arr.forEach( b => {
    //     sum += b.likes;
    // });

    // 2. način
    for(let i=0; i<arr.length; i++) {
        // arr[i] je objekat
        // arr[i].likes je broj lajkova objekta arr[i]
        sum += arr[i].likes;
    }

    return sum;
}
console.log(`Ukupan broj lajkova: ${sumLikes(arrBlogs)}`);

// Lajkovi iz 1. i 3. bloga
let sum13 = arrBlogs[0].likes + arrBlogs[2].likes;
console.log(sum13);

sum13 = arrBlogs[0]["likes"] + arrBlogs[2]["likes"];
console.log(sum13);

// 2. ZADATAK
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
// Vukašin
let prosjecniLajkovi = arr => {
    let brLajkova = sumLikes(arrBlogs);
    return brLajkova / arr.length;
}
console.log(prosjecniLajkovi(arrBlogs));

// 3. ZADATAK
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let moreLikes = arr => {
    arr.forEach(elem => {
        if(elem.likes > elem.dislikes) {
            console.log(elem.title);
        }
    });
}
console.log("Blogovi sa više lajkova nego dislajkova");
moreLikes(arrBlogs);

// 4. ZADATAK
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploVisePoz = arr => {
    arr.forEach(elem => {
        if (elem.likes >= elem.dislikes * 2) {
            console.log(elem.title);
        }
    })
}
console.log(`Blogovi sa duplo vise likes nego dislikes`);
duploVisePoz(arrBlogs)

// 5. ZADATAK
// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let zavrsavaUzv = arr => {
    arr.forEach(elem => {
        if (elem.title.endsWith("!")) {
            console.log(elem.title);
        }
    })
}
console.log(`Naslovi  sa uzvicnikom na kraju.`);
zavrsavaUzv(arrBlogs);

// Bogdan
let uzvicnik = arr =>
{
     arr.forEach(el=>
        {
            // if('!' == el.title.charAt(el.title.length-1))
            if('!' == el.title[el.title.length-1])
            {
                console.log(el.title);
            }
        })
 }
console.log(`Title-ovi koji imaju na kraju uzvicnik`);
uzvicnik(arrBlogs);

// Kristian
let g = (a) => {
    a.forEach((e) => {
      let j = e.title.length - 1;
      if (e.title[j] == `!`) {
        console.log(e.title);
      }
    });
};
g(arrBlogs);