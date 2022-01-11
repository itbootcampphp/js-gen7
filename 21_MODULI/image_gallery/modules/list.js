import generateImage from "./general.js";

function generateList(parent) {
    let ul = document.createElement('ul');
    ul.style.listStyleType = "none";
    ul.style.overflow = "hidden";
    parent.appendChild(ul);
    return ul;
}

function generateItem(parent, src) {
    let li = document.createElement('li');
    li.style.float = "left";
    let img = generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);
    return li;
}

export {generateList, generateItem};