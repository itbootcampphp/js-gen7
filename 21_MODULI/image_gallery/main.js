/*
import { generateList, generateItem as generateListItem } from "./modules/list.js";
import { generateTable, generateTableRow, generateItem as generateTableItem } from "./modules/table.js";

let list = generateList(document.body);
generateListItem(list, "images/1.jpg");
generateListItem(list, "images/2.jpg");
generateListItem(list, "images/3.jpg");

let table = generateTable(document.body);
let tr = generateTableRow(table);
generateTableItem(tr, "images/1.jpg");
generateTableItem(tr, "images/2.jpg");
generateTableItem(tr, "images/3.jpg");
*/

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

console.log(List);

let list = List.generateList(document.body);
List.generateItem(list, "images/1.jpg");
List.generateItem(list, "images/2.jpg");
List.generateItem(list, "images/3.jpg");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "images/1.jpg");
Table.generateItem(tr, "images/2.jpg");
Table.generateItem(tr, "images/3.jpg");