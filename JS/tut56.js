console.log('This is tut 56 on for-of Loop vs for-in Loop');

console.log("This is tutorial 56 on for-in and for-of loops");

let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];


// **********For in loop*******

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);   
// }


// 1. ITERATING AN OBJECT
let obj = {
    name: "Harry",
    language: "JavaScript",
    hobbies: "Android app development"
}
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }

// 1.2 Iterating an object using for-in loop:
for (let key in obj){
    console.log(obj[key]);
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "This is my string";
for (let char in myString){
    console.log(myString[char]);
}

// Quiz: Use traditional for loop to iterate through the same string


// **********For of loop***********
console.log("*****************For of loop starts here**************")
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}


// Which loop should we use? and When?
// Each type of loop is useful in a different scenario:

// If indexes are needed while accessing an array of indexes related logical stuff are there, the for loop is a good choice.
// If there is a need to access keys/properties regardless of the sequence, use a for-in loop.
// If there is a need to iterate through items of an iterable, then the for-ofloop is the right choice.
