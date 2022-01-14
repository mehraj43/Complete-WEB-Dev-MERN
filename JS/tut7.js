console.log("Welcome to tut 7");

let marks = [34,23,24,93,73,25];
const fruits = ['Orange','Apple','Mango'];
const mixed = ['str',89,43,27,[3,5]];

const arr = new Array(23,123,21,'Orange');
// console.log(arr);
// console.log(mixed);
// console.log(fruits);

console.log(arr.length)
console.log(Array.isArray(arr));
arr[0] = 'Malik';   
let arrelement = arr[0];
console.log('element : ', arrelement);
console.log(arr);

let value = marks.indexOf(24);
console.log(value); 

// Mutating arrays
marks.push(3556);
console.log(marks);
marks.unshift(1009);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(2,3);
console.log(marks);
marks.reverse();
console.log(marks);
let marks2 = [7,1,2,3];
marks = marks.concat(marks2);
console.log(marks);

let myobj = {
    name : 'Meraj',
    'last name' : 'Malik',
    channel : 'CodewithMalik',
    isActive : true,
    marks : [1,24,5,8]
}

console.log(myobj);
console.log(myobj.marks);
console.log(myobj.isActive);
console.log(myobj['last name']);
console.log(myobj['channel']);



