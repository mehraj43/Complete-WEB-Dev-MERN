console.log("Welcome to tut 9");


//using forEach loop for array ops
let arr  = [2,4,5,67,8,9];
arr.forEach(function(element){
    console.log(element);
});  //recommended 

console.log("forEach with element,index,array ");
arr.forEach(function(element,index,array){
    console.log(element,index,array);
});

// using for loop
console.log("using for loop");
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
};

let obj = {
    name : 'Rohan Das',
    age : 78,
    type : 'programmer',
    os : 'windows'
}
// using for loop for objects
console.log("using for loop for objects");
for(let key in obj){
    console.log(obj[key]);
}

console.log("using for loop for objects with back tick");
for(let key in obj){
    console.log(`${key} of object is ${obj[key]}`);
}


