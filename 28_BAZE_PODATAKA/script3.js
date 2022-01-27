// Zadatak 2
// a)
/*
db.collection('customers')
.where('addresses', 'array-contains', 'Nis')
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`Nema korisnika sa zadatim uslovom`);
    }
})
.catch(err => {
    console.log(`Greska u uputu: ${err}`);
});
*/

// b)
/*
db.collection('customers')
.where('salary', '>=', 500)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`Nema korisnika sa zadatim uslovom`);
    }
})
.catch(err => {
    console.log(`Greska u uputu: ${err}`);
});
*/

// c)
/*
db.collection('customers')
.where('salary', '>=', 300)
.where('salary', '<=', 800)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`Nema korisnika sa zadatim uslovom`);
    }
})
.catch(err => {
    console.log(`Greska u uputu: ${err}`);
});
*/

// d)
/*
db.collection('customers')
.where('salary', '<=', 900)
.where('age', '==', 30)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`Nema korisnika sa zadatim uslovom`);
    }
})
.catch(err => {
    console.log(`Greska u uputu: ${err}`);
});
*/

// e)
/*
db.collection('customers')
.where('addresses', 'array-contains-any', ["Nis", "Beograd"])
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`Nema korisnika sa zadatim uslovom`);
    }
})
.catch(err => {
    console.log(`Greska u uputu: ${err}`);
});
*/

// f)
db.collection('customers')
.where('age', 'in', [22, 25, 28])
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`Nema korisnika sa zadatim uslovom`);
    }
})
.catch(err => {
    console.log(`Greska u uputu: ${err}`);
});