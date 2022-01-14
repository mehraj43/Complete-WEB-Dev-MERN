console.log("Welcome to tut 14");

// Element selector:
// 1. Single Element selector
// 2. Multi Element selector

// 1. Single Element selector
let ele = document.getElementById("myfirst");
// ele = ele.className;
// ele = ele.childNodes;
// ele = ele.parentNode;
ele.style.color = "red";
ele.innerText = "Malik";
ele.innerHTML = '<b>Malik</b>';
console.log(ele.innerHTML);
console.log(ele.innerText);

console.log("+-------------------------+");
let sel = document.querySelector("#myfirst");
console.log(sel);

console.log("+-----------------------+");
sel = document.querySelector(".child")
sel = document.querySelector("b");
sel = document.querySelector("h1");
sel = document.querySelector("div");
sel.style.color = "green";
console.log(sel);

// 2. Multi Element selector
let elems = document.getElementsByClassName("child");
console.log(elems);
console.log("+-------------------------+");
elems = elems[2];
console.log(elems);
console.log("+-----------------------------+");
elems = document.getElementsByClassName("container");
console.log(elems);
console.log(elems[0].getElementsByClassName("child"));
console.log("+-------------+");
console.log(elems[1].querySelector("h1"));
console.log("+--------------------------+");
console.log(elems[1].getElementsByTagName("h1"));
console.log("+--------------------------+");


elems = document.getElementsByTagName("div");

Array.from(elems).forEach(function (element) {
    console.log(element);
    element.style.color = "violet";
});


console.log(elems.length);
// OR  using for loop to iterate
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    // console.log(element);
    element.style.color = "greenyellow"
}




 