console.log('Welcome to tut 44 i.e. Error Handling and try and catch');

// Pretend this is coming from a server as response
let a = 'Harry bhai';
a = undefined;
if (a != undefined) {
	throw new Error('This is not undefined');
} else {
	console.log('This is undefined');
}

try {
	null.console;
	console.log('We are inside try block');

	functionHarry();
} catch (error) {
	console.log(error);
	console.log('Are you okay?');
	console.log(error.name);
	console.log(error.message);
} finally {
	console.log('Finally we will run this');
}


// Types of errors:
// TypeError = occurs when a variable or parameter is not of a valid type.
// SyntaxError = occurs when there is an error in syntax.
// ReferenceError = occurs when there is an invalid reference.
// EvalError= occurs when there is an error in global function.
// RangeError=  occurs when a numeric variable or parameter is outside of its valid range
// Types of Errors:-
// There can two types of errors:

// Syntax Error: This is the error in the syntax. For example, if we write console.lo('JS');, the above program throws a syntax error. The spelling of the log is a mistake in the above code.
// Runtime Error: The runtime error occurs during the execution of the program. For example, calling an invalid function or a variable.

// In JavaScript, we can also add a throw or a finally clause. Let us see what role they play.

// throw: This is a block of code nested within the try statement and allows the programmer to write their own error that they want to handle
// finally: This block of code runs once all the other statements have run