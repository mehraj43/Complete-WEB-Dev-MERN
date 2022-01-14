console.log("Welcome to tut 21");

// var btn = document.createElement("div");
// console.log(btn);
// btn.id = "editdiv";
// btn.className = "ceditdiv"
// btn.style.color = "red";
// btn.style.fontSize = "50px";
// // btn.style.fontSize = "x-large";
// let tnode = document.createTextNode("This is div tag");
// btn.append(tnode);

// let head1 = document.getElementById("heading");
// document.body.append(btn);


// let div = document.querySelector("#editdiv");
// div.addEventListener("click", func1);

// function func1(e) {
//     let edit = document.createElement("textarea");
//     console.log("Thanks", e);
//     edit.id = "txt";
//     edit.innerText = btn.innerText;

//     let add = document.getElementById("editdiv");
//     add.replaceWith(edit);

//     e.preventDefault();

//     edit.addEventListener("blur", function (e) {
//         let data = edit.value;
//         localStorage.setItem("key", data);
//         let div3 = document.querySelector("#txt");
//         btn = document.createElement("div");
//         console.log(btn);
//         btn.id = "editdiv";
//         btn.className = "ceditdiv"
//         btn.style.color = "red";
//         btn.style.fontSize = "50px";
//         // btn.style.fontSize = "x-large";
//         let tnode = document.createTextNode("This is div tag");
//         btn.append(tnode);
//         btn.innerHTML = localStorage.getItem("key");
//         // let no = document.body.append(btn);
//         div3.replaceWith(btn);
//         // btn.addEventListener("click",function)
//     });

// }



// let dodo = document.createElement('div');
// dodo.style = "height:450px; width:320px; background-color:blue; margin:100px; position:center;";
// dodo.innerHTML = "<b> Hi i am Here CLick me";
// dodo.id = "hihi";
// dodo.className = "diver";
// let r = document.getElementById('macho');
// r.appendChild(dodo);
// let texto = document.createElement('textarea');
// texto.id = 'i_text';
// texto.style = 'height:450px; width:320px; background-color:white; border:2px solid black; margin:100px; position:center;';
// texto.className = 'i_text2';
// dodo.addEventListener('click', function (e) {
//     dodo.replaceWith(texto);
// });
// texto.addEventListener('blur', function (e) {
//     let tt = texto.value;
//     localStorage.setItem('data', tt);
// });

let crd = document.createElement("div");
crd.style = `height:420px; 
            width:420px; 
            background-color:blue; 
            margin:100px; 
            position:center;
            text-align:center;
            `;
crd.innerHTML = "<b>Hi im editale click on me</b>";
crd.id = "divid";
crd.className = "divclass";
let r = document.getElementById("heading");
r.appendChild(crd);
let txt = document.createElement("textarea");
txt.id = "txtid";
txt.className = "txtclass";
crd.addEventListener("click", func1);

function func1(e) {
    crd.replaceWith(txt);
}

txt.addEventListener("blur", func2);

function func2(e) {
    let txtData = txt.value;
    localStorage.setItem("data", txtData);
    txt.replaceWith(crd);
}

