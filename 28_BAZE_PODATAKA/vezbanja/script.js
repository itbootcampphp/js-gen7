// db - objekat "baze" (njega vucemo iz html fajla)
console.log(db);

// pristupanje kolekciji
let customers = db.collection('customers');
console.log(customers);

// pristupanje dokumentu
let doc1 = customers.doc('customer-01');
console.log(doc1);

let doc2 = db.collection('tasks').doc('task-01');
console.log(doc2);

/*
Za pristup dokumentu:
let doc = db.collection('...').doc('...')
Kod dokumenata imamo sledece operacije:
  CRUD (Create, Read, Update, Delete)  
  Create : doc.set(...) 
  Read   : doc.get(...)
  Update : doc.update(...)
  Delete : doc.delete(...)
Sve ove 4 operacije kao rezultat vracaju Promise
Sto znaci: Nakon njih lancamo .then() i .catch()
*/

let obj = {
    name: "Vesna",
    age: 22,
    addresses: ["Nis", "Leskovac"],
    salary: 470.00
};

db.collection('customers')
.doc('customer-05')
.set(obj)
.then(() => {
    console.log("Dodat novi dokument u kolekciju 'customers'");
    return db.collection('customers')
        .doc('customer-05')
        .set(
        { height: 180 },
        { merge: true }
    );
})
.then(() => {
    console.log("Spojen dokument 'customer-05' u kolekciju 'customers'");
})
.catch((err) => {
    console.log("Greska prilikom dodavanja novog dokumenta: " + err);
});

let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00");

let obj2 = {
    title: "Fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbal sa drugarima iz ITBootcamp-a"
};

db.collection('tasks')
.doc('task-02')
.set(obj2)
.then(() => {
    console.log(`Uspesno dodat task!`);
})
.catch(msg => {
    console.log(`Neuspesno dodat task: ${msg}`);
});



// Update
db.collection('tasks')
.doc('task-02')
.update({
    priority: true
})
.then(() => {
    console.log(`Uspesno promenjeno polje u dokumentu`);
})
.catch(err => {
    console.log(`Greska prilikom menjanja dokumenta: ${err}`);
});


// Delete
db.collection('customers')
.doc('customer2')
.delete()
.then(() => {
    console.log('Uspesno izbrisan dokument');
})
.catch(err => {
    console.log(`Greska prilikom brisanja: ${err}`);
});

console.log("Test poruka");


// Drugi nacin za dodavanje dokumenta

db.collection('tasks')
.add({
    title: "Vezba za projekat",
    description: "Vezbanje JS",
    start_date: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
    due_date: null,
    priority: true
})
.then(() => {
    console.log("Uspesno dodat zadatak u kolekciju tasks");
})
.catch(err => {
    console.log(`Desila se greska: ${err}`);
});

/*
db.collection('...').add()   <=>   db.collection('...').doc().set() 
  - dodaje novi dokument sa random generisanim ID-em

db.collection('...').doc(id).set()
  - dodaje novi dokument sa zadatim id-em
*/
