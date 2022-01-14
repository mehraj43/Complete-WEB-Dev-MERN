console.log("Welcome to tut 16");


// add element
let ele  = document.createElement('li');

// Add a class name to the li element
ele.className = "ulchild";
ele.id = "createdli";
ele.setAttribute("title","mytitle")
ele.innerText = "I Me and Myself";
ele.innerHTML = "<b>I Me and Myself</b>";

let ul = document.querySelector("ul.this");
ul.appendChild(ele);

console.log(ele);

// replaceWith element
let ele2 = document.createElement("h1");
ele2.id = "elem2";
ele2.className = "ele2";
let tnode = document.createTextNode("This is a heading created using textnode attribute");
ele2.appendChild(tnode);

ele.replaceWith(ele2);

// replaceChild
let myul = document.getElementById("myul");
myul.replaceChild(ele,document.getElementById("fui"));


// removechild
myul.removeChild(document.getElementById("lui"));

console.log(ele2);
let pr =ele.getAttribute("id");
pr = ele.getAttribute("class");
pr = ele.hasAttribute("hr");
ele2.setAttribute("title","myele2title");
console.log(ele,pr);

// HW
// let hw = document.createElement("h1");
// let textn = document.createTextNode("Go to codewithharry.com");
// hw.appendChild(textn);
// hw.id = "hea";
// hw.class = "cla";

// let u = document.querySelector("#myul");
// u.appendChild(hw);

// let a = document.createElement("a");
// a.href = "https://www.codewithharry.com";
// a.innerText = "Code With Harry";
//  let b = hw.parentNode;
//  console.log(b);

//  b.appendChild(a);



let h1 = document.createElement("h2");
h1.innerText = "Go to codewithharry";

let a = document.createElement("a");
a.href = "https://www.codewithharry.com";
a.appendChild(h1);

let con = document.getElementById("myul");
con.appendChild(a);