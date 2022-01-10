import { generateList, generateListItem } from "./modules/list.js";

let list = generateList(document.body);
generateListItem(list, "images/1.jpg");
generateListItem(list, "images/2.jpg");
generateListItem(list, "images/3.jpg");