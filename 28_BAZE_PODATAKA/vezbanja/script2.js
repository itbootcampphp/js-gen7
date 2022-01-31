// 1) Pristupanje konkretnom dokumentu u kolekciji
// 2) Pristupanje svim ili odredjenim dokumentima iz kolekcije

// 1)
db.collection('customers')
.doc('customer-01')
.get()
.then((doc) => {
    if(doc.exists) {
        console.log(`Postoji dokument ${doc.id}`);
        let obj = doc.data();
        console.log(obj);
    }
    else {
        console.log(`Ne postoji dokument ciji je id: ${doc.id}`);
    }
    // Polja:  doc.id (string), doc.exists (boolean)
    // Metoda: doc.data()
})
.catch((err) => {
    console.log(`Nemoguce dohvatiti dokument: ${err}`);
});

// 2)
db.collection('customers')
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            console.log(doc.id, doc.data());
        });
    }
    else {
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
});



// 1) Dohvatanje dokumenata u odredjenom redosledu
// 2) Dohvatanje odredjenog broja dokumenata 
// 3) Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume (filtriranje)

// 1)
db.collection('customers')
.orderBy("age", "desc")
.orderBy("name")
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name + " " + obj.age + " " + obj.salary);
        });
    }
    else {
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
});




// 2) 
db.collection('customers')
.orderBy("name")
.orderBy("age", "desc")
.orderBy("salary", "desc")
.limit(1)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name + " " + obj.age + " " + obj.salary);
        });
    }
    else {
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
});




// 3)
db.collection('customers')
.where("age", "<=", 22)
//.orderBy("age", "desc")
//.orderBy("name")
//.orderBy("age", "desc")
//.orderBy("salary", "desc")
//.limit(1)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        let allDocs = snapshot.docs;
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name + " " + obj.age + " " + obj.salary);
        });
    }
    else {
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch(err => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
});