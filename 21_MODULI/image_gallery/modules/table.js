import { generateImage } from "./general.js";

function generateTable(parent) {
    let table = document.createElement("table");
    table.style.border = "0";
    parent.appendChild(table);
    return table;
}

function generateTableRow(parent) {
    let tr = document.createElement("tr");
    parent.appendChild(tr);
    return tr;
}

function generateTableItem(parent, src) {
    let td = document.createElement("td");
    let img = generateImage(src);
    td.appendChild(img);
    parent.appendChild(td);
    return td;
}

export {generateTable, generateTableRow, generateTableItem};