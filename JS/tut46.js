console.log('This is tut 46 on regular expressions');
let reg = /harry/; //This is a regular expression literal in js
reg = /harry/g; //g means global and is called flag
// reg = /harry/i; //i means case insensitive

console.log(reg);
console.log(reg.source);

let s = 'This is great code with harry and also harry bhai';
//function to match expressions
// 1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); ---> We can use multiple exec with global flag

// if (result) {
// 	console.log(result);
// 	console.log(result.input);
// 	console.log(result.index);
// }

// 2. test() - returns true or false
let result2 = reg.test(s);
// console.log(result2); ---> This will only print true if the "reg" is there in the String "s"

// 3. match() - it will return an Array of results or null
// let result3 = reg.match(s) -->This is wrong
let result3 = s.match(reg); //This is correct way
// console.log(result3);

// 4. search() - returns index of first match else -1
// let result4 = reg.search(s) -->This is wrong
let result4 = s.search(reg); //This is correct way
console.log(result4);

// 5. replace() - returns new replaced string with all the replacements (if no flag is given, first match will be replaced)
// let result5 = reg.replace(s) -->This is wrong
let result5 = s.replace(reg, 'Malik'); //This is correct way
console.log(result5);
