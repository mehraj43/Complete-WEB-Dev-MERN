console.log("Welcome to tut 15");

let cont = document.querySelector(".no");
cont = document.querySelector(".container");

console.log("Using childNodes:");
console.log(cont.childNodes);


let nodeNam = cont.childNodes[1].nodeName;
console.log(nodeNam);

let nodeTyp = cont.childNodes[3].nodeType;
console.log(nodeTyp);


// // NodeType
// 1. element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

console.log("Using children:");
console.log(cont.children);

nodeNam = cont.children[1].nodeName;
console.log(nodeNam);

nodeTyp = cont.children[0].nodeType;
console.log(nodeTyp);

// childrens children
let child = document.querySelector(".container");
console.log(child.children[1].children[0].children);

console.log("+-------------------------------+");

console.log(child.firstChild);
console.log(child.firstElementChild);

console.log("+----------------+");
console.log(child.lastChild);
console.log(child.lastElementChild);
console.log("Total Children : "+child.childElementCount);

console.log("+-----------------------------+");

console.log(child.firstElementChild);
console.log(child.firstElementChild.parentNode);
console.log(child.firstElementChild.nextSibling);
console.log(child.firstElementChild.nextElementSibling);
console.log(child.firstElementChild.nextElementSibling.nextElementSibling);


