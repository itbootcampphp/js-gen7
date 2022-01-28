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
/*
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
*/

// Zadatak 4
// a)
/*
db.collection('tasks')
.where('priority', '==', true)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`Nema zadataka sa zadatim uslovom`);
    }
})
.catch(err => {
    console.log(`Greska u uputu: ${err}`);
});
*/

// b)
/*
let now = new Date();
let year = now.getFullYear();
let date1 = new Date(year, 0, 1); // 1. januar tekuce godine
let date2 = new Date(year + 1, 0, 1); // 1. januar naredne godine
let date1Timestamp = firebase.firestore.Timestamp.fromDate(date1);
let date2Timestamp = firebase.firestore.Timestamp.fromDate(date2);

db.collection('tasks')
.where('due_date', '>=', date1Timestamp)
.where('due_date', '<', date2Timestamp)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`Nema zadataka sa zadatim uslovom`);
    }
})
.catch(err => {
    console.log(`Greska u uputu: ${err}`);
});
*/

// c) 
/*
let now = new Date();
let date1Timestamp = firebase.firestore.Timestamp.fromDate(now);

db.collection('tasks')
.where('due_date', '<=', date1Timestamp)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`Nema zadataka sa zadatim uslovom`);
    }
})
.catch(err => {
    console.log(`Greska u uputu: ${err}`);
});
*/

// d)
/*
let now = new Date();
let date1Timestamp = firebase.firestore.Timestamp.fromDate(now);

db.collection('tasks')
.where('start_date', '>', date1Timestamp)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`Nema zadataka sa zadatim uslovom`);
    }
})
.catch(err => {
    console.log(`Greska u uputu: ${err}`);
});
*/
