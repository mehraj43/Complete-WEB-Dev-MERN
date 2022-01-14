console.log("Welcome to tut 19");

let str = "python";
let links = document.links;
let href;
Array.from(links).forEach(function (ele) {
    href = ele.href;
    if (href.includes(str)){
        console.log(href);
    }
});

