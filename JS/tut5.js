//Type conversion 
console.log("Welcome to tut5");

let myVar;
myVar = String(34);
console.log(myVar, 'Data type is '+ (typeof myVar));

let booleanVar;
booleanVar = true;
console.log(booleanVar, 'Data type is '+ (typeof booleanVar));
booleanVar = Number(true);
console.log(booleanVar,'Data type is '+ (typeof booleanVar));

let date = String(new Date());
console.log(date,'Data type is '+ (typeof date))

let i =  8;
console.log(i);
let z = i.toString();
console.log(z);
console.log('Data type is '+ (typeof z));

let num = Number('34.009');
console.log(num, 'Data type is '+ (typeof num));
num = parseInt('34.009');
console.log(num, 'Data type is '+ (typeof num));
num = parseFloat('34.00999967676');
console.log(num, 'Data type is '+ (typeof num));
console.log(num.toFixed(15), 'Data type is '+ (typeof num));

// Type Coercion
let mystr = Number("698");
let mynum = 34;
console.log(mystr + mynum);
