console.log('Welcome to tut 41 i.e. arrow function');

// ARROW FUNCTIONS

// Creating a regular function
// const harry = function (){
//     console.log("This is the best person ever")
// }

// Converting it to an arrow function
// const harry = ()=>{
//     console.log("This is the best person ever")
// }
// harry();

// function returning something
// const greet = function(){
//     return "Good Morning";
// }

// One liners do not require braces/return
// one line will automatically return
// const greet = () =>  "Good Morning";

// const greet = () =>  ({name: "harry"});

// Single parameters do not need parenthesis
// but you will have to put parenthesis if there are multiple paramteres
const greet = (name) => 'Good Morning ' + name ;

console.log(greet('Harry'));

// Limitations of Arrow Functions:-
// An arrow function expression is an alternative to a traditional function expression, but there are some limitations:

// Arrow functions do not have its own bindings to this or super, and should not be used as methods.
// It is not suitable for the call, apply and bind methods, which generally rely on establishing a scope.
// Arrow functions cannot be used as constructors.
// Arrow functions are a powerful addition to ES6, but we have to be careful while using them. There are some places where arrow functions are not usable, and this can cause difficulty for us to track errors, especially if we do not understand how they really work. Arrow functions are the best choice when working with closures or callbacks, but it is not a good choice when working with object methods or constructors.
