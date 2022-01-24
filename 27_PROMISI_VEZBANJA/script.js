let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form");
let inputOrder = document.querySelector("#capacity");
let divFilter = document.querySelector("#filter");
let formFilter = document.querySelector("#filter form");
let inputNaziv = document.querySelector("#naziv");
let inputCenaMin = document.querySelector("#cenaMin");
let inputCenaMax = document.querySelector("#cenaMax");

function getItem(resourse, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function() {
        if(this.readyState === 4 && this.status === 200) {
            // sve ok
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if(this.readyState === 4) {
            // desila se neka greska
            reject("could not fetch data");
        }
    });
    request.open('GET', resourse);
    request.send();
}

function submitForm1(event) {
    event.preventDefault();
    let capacity = inputOrder.value;
    let ids = [];
    getItem("json/stock.json", (data) => {
        data.forEach(item => {
            if(item.stock <= 0) {
                ids.push(item.id);
            }
        });
        getItem("json/weights.json", (data) => {
            let totalWeight = 0;
            data.forEach(item => {
                if(ids.includes(item.id)) {
                    totalWeight += item.weight;
                }
            });
            console.log(`Ukupna tezina proizvoda koji treba da se naruce je: ${totalWeight}`);
            if(totalWeight > capacity) {
                let par = document.createElement('p');
                par.innerHTML = `Ukupna tezina prozivoda je veca od kapaciteta kamiona!`;
                par.style.color = 'red';
                par.style.fontSize = '24px';
                par.style.fontWeight = 'bold';
                divOrder.appendChild(par);
            }
            else {
                getItem("json/prices.json", (data) => {
                    let totalPrice = 0;
                    data.forEach(item => {
                        if(ids.includes(item.id)) {
                            totalPrice += item.price;
                        }
                    });
                    let par = document.createElement('p');
                    par.innerHTML = `Ukupna cena porudzbine je: ${totalPrice} RSD`;
                    par.style.color = 'green';
                    par.style.fontSize = '24px';
                    par.style.fontWeight = 'bold';
                    divOrder.appendChild(par);
                }, (msg) => { console.log(msg); });
            }
        }, (msg) => { console.log(msg); });
    }, (msg) => { console.log(msg); });
}

/*
1. ideja: getItems() da se pozove jedan za drugim
  getItems("json/stock.json");
  getItems("json/weights.json");
  getItems("json/prices.json");
NETACNA IDEJA, jer je svaki getItem asinhron poziv,
sto znaci da ne mora weights.json da se dohvati pre stock.json
(slicno i za prices.json)

2. ideja: Redosled asinhronih poziva odvija preko callback funkcija
TACNA IDEJA, ali neprakticna (callback hell)

3. ideja: Redosled asinhronih poziva odvija preko Promis-a
*/

function getItemReturnPromise(resourse) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function() {
            if(request.readyState === 4 && request.status === 200) {
                // sve ok
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4) {
                // desila se neka greska
                reject("could not fetch data");
            }
        });
        request.open('GET', resourse);
        request.send();
    });
}

function submitForm2(event) {
    event.preventDefault();
    let capacity = inputOrder.value;
    let ids = [];
    getItemReturnPromise("json/stock.json")
    .then((data) => {
        data.forEach(item => {
            if(item.stock <= 0) {
                ids.push(item.id);
            }
        });
        return getItemReturnPromise("json/weights.json");
    })
    .then((data) => {
        let totalWeight = 0;
        data.forEach(item => {
            if(ids.includes(item.id)) {
                totalWeight += item.weight;
            }
        });
        if(totalWeight > capacity) {
            let par = document.createElement('p');
            par.innerHTML = `Ukupna tezina prozivoda je veca od kapaciteta kamiona!`;
            par.style.color = 'red';
            par.style.fontSize = '24px';
            par.style.fontWeight = 'bold';
            divOrder.appendChild(par);
        }
        else {
            return getItemReturnPromise("json/prices.json");
        }
    })
    .then((data) => {
        if(data !== undefined) {
            let totalPrice = 0;
            data.forEach(item => {
                if(ids.includes(item.id)) {
                    totalPrice += item.price;
                }
            });
            let par = document.createElement('p');
            par.innerHTML = `Ukupna cena porudzbine je: ${totalPrice} RSD`;
            par.style.color = 'green';
            par.style.fontSize = '24px';
            par.style.fontWeight = 'bold';
            divOrder.appendChild(par);
        }
    })
    .catch((msg) => {
        console.log(msg);
    });
}

//formOrder.addEventListener('submit', submitForm1);
formOrder.addEventListener('submit', submitForm2);





// ZADATAK 2

async function clickGetItems() {
    let naziv = inputNaziv.value;
    let cenaMin = inputCenaMin.value;
    let cenaMax = inputCenaMax.value;

    let data1 = await getItemReturnPromise('json/stock.json');
    let artikliNaStanju = [];
    data1.forEach(item => {
        if(item.stock > 0) {
            artikliNaStanju.push(item.id);
        }
    });

    let data2 = await getItemReturnPromise('json/prices.json');
    let tabela = document.createElement('table');
    data2.forEach(item => {
        if(artikliNaStanju.includes(item.id) && item.item.includes(naziv)
            && item.price >= cenaMin && item.price <= cenaMax) {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                td1.innerHTML = item.item;
                td2.innerHTML = item.price;
                tr.appendChild(td1);
                tr.appendChild(td2);
                tabela.appendChild(tr);
            }
    });
    return tabela;
}

function akcija(event) {
    event.preventDefault();
    clickGetItems()
    .then(data => {
        divFilter.appendChild(data);
    })
    .catch(error => {
        console.log(error);
    });
}

formFilter.addEventListener('submit', akcija);