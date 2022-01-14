console.log("Welcome to tut 18");

let btn = document.getElementById("btn");

btn.addEventListener("click", func1);
btn.addEventListener("dblclick", func2);

let arri = [1, 2, 4, 5, 7];
let sum = 0;
function func1(e) {
    console.log("Thanks" , e);
    for (let i = 0; i < arri.length; i++) {
        sum += arri[i];
    }
    console.log("Total sum of the given array is : " + sum);
    // sum = 0;     Reassign as 0 or it will keep adding
    console.log("Total sum of the given array is : " + sum);
    e.preventDefault();
}

function func2(e) {
    console.log("Thanks for double click", e);
    let  arra = [];                               // define our array
    let arr = [];
    let total = 0;
    arra = prompt("Enter your numbers").split(",");
    for(let i = 0;i<arra.length;i++){
        arr.push(Number(arra[i]));
        total+=arr[i];
        
    }
    console.log(arr);
    console.log("Total value of second array is : "+total);
    e.preventDefault();
}

// var arr = [];
// for(var i = 0; i < 10; i++)
//    arr.push(prompt("Enter a number");


btn.addEventListener("mousedown",func3);

function func3(e){
    console.log("Thanks its a mousedown event",e);
    e.preventDefault();
}


// document.querySelector(".no").addEventListener("mouseenter",function(e){
//     console.log("You hovered mouse on no class");
//     // e.preventDefault();
// });

// document.querySelector(".no").addEventListener("mouseleave",function(e){
//     console.log("You exited mouse on no class");
//     // e.preventDefault();
// });


document.querySelector(".container").addEventListener("mousemove",function(e){
    console.log(e);
    console.log("X-axis : "+e.offsetX+" "+"Y-axis : "+e.offsetY);
    let a = e.x;
    let b = e.y;
    let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    // let x = e.offsetX;
    // let y = e.offsetY;
    // let z = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    // document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetY})`
    document.body.style.backgroundColor = `rgb(${a},${b},${c})`
    console.log("You moved mouse on no class");
    // e.preventDefault();
});
