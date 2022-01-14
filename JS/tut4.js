//Primitive data types

//string
let name = "Meraj";
console.log("My name is:"+ name );
console.log("Data type is:"+ (typeof name) );

// Numbers
let marks = 43;
console.log("Data type is : "+ (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is : " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is : " + (typeof nullVar));

// undefined
let undef = undefined;
console.log("Data type is : " + (typeof undef));

// Reference Data type
// Arrays
let myarr = [1,2,4,true,'array'];
console.log("Data type is : " + (typeof myarr));

// Object literals
let stmark = {
    malik : 89,
    shubam : 45,
    rohan : 67
}

console.log(stmark);
console.table(stmark);
console.log("Data type is : " + (typeof stmark));

// function
function findName(){

}
console.log("Data type is : " + (typeof findName));

// Date
let date = new Date();
console.log("Data type is : " + (typeof date));