console.log('this is tut 47 on regular expressions metacharacters');

let regex = /harry/;
// Lets look into some metacharacter symbols
regex = /^harrdc/; // ^ means expression will match if string starts with
regex = /harry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; //matches any one character
regex = /h*rry/; //matches any 0 or more characters
regex = /ha?rryi?t/; //? after character means that character is optional
regex = /h\*rry/;

let str = 'harry is harry\n';

let result = regex.exec(str);
console.log('The result from exec is:', result);

if (regex.test(str)) {
	console.log(`The string: ${str} matches the expression ${regex.source}`);
} else {
	console.log(
		`The string: ${str} does not match the expression ${regex.source}`
	);
}

// Examples of Metacharacters:-
// Following are the some examples of how we can use metacharacters in JavaScript.

// Do a global search for "m.d" in a string:
let reg = /m.d/g;
str = "He's mad!"; //matches
let res = reg.exec(str);
console.log(res);

// Do a global search for at least one "e":
reg = /o+/g;
str = 'Codeeeee!'; //matches
res = reg.exec(str);
console.log(res);

// Do a global search for a "5", followed by zero or more "0" characters:
reg = /50*/g;
str = '5, 500 or 5000?'; //matches
res = reg.exec(str);
console.log(res);

// Do a global search for "javaScript" at the end of a string:
reg = /javaScript$/g;
str = 'Welcome to the tutorial of javaScript'; //matches
res = reg.exec(str);
console.log(res);

// Do a global search for "javaScript" at the beginning of a string:
reg = /^javaScript/g;
str = 'javaScript supports OOP'; //matches
res = reg.exec(str);
console.log(res);

// Do a global search for "code" followed by " harry":
reg = /code(?= harry)/g;
str = 'code harry'; //matches
res = reg.exec(str);
console.log(res);

// Do a global, case insensitive search for "code" not followed by "JavaScript":
reg = /code(?! JavaScript)/gi;
str = 'Code JavaScript'; //does not match
res = reg.exec(str);
console.log(res);
