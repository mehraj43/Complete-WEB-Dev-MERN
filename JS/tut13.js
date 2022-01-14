console.log("Welcome to tut 13");

let a = document.links;

console.log(a);
console.log("+------------------+");
console.log(String(a[0]));

Array.from(a).forEach(function (ele) {
    console.log(ele);
});

console.log("-------------------------------------");
let b = "wit";

Array.from(a).forEach(function (element) {
    // console.log(element.src).includes(b);
    if (String(element).includes(b)) {
        console.log(element);
    }
});

console.log("+-----------------------+");
console.log(String(a[1]));

let c = "oogl";

Array.from(a).forEach(function (ele){
    if(String(ele).includes(c)){
        console.log(ele);
    }
})
