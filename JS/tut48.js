console.log('this is tut48 on regular expressions character sets');

// Regular Expressions:
// Basic functions
// Metacharacter Symbols

// const regex = /^h/i;

// Character Sets - We use []
let regex = /h[a-z]rry/; // can be any character from a to z
regex = /h[aty]rry/; // can be an a, t or y
regex = /h[^aty]rry/; // cannot be any of a, t or y
regex = /h[^aty]rr[yYu]/; // cannot be any of a, t or y + can be a u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many character sets as we want

// Quantifiers - We use {}
regex = /har{2}y/; // r can occur exactly 2 times
regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings  - We use paranthesis for groupings ()
regex = /(har){2}([0-9]r){3}/;

// const str = "hirry9 bhai";
str = 'harrry bhai';
str = 'harhar1r4r5r bhai';

let result = regex.exec(str);
console.log('The result from exec is ', result);

if (regex.test(str)) {
	console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
	console.log(
		`The string ${str} does not match the expression ${regex.source}`
	);
}

// Regular Expressions - Character sets | JavaScript Tutorial In Hindi #48
// A regular expression is a sequence of characters that define a search pattern. Usually, such patterns are used by string-searching algorithms for "find" or "find and replace" operations on strings or input validation. In the previous tutorial, we have studied the methods and metacharacters of the regular expression. If you have not watched the tutorial yet, then check tutorial#46 and tutorial#47. In today's tutorial, we will learn how to use regular expressions to work with sets of characters. Unlike the dot(.), which matches any single character, character sets enable us to match specific characters and character ranges.

// Several characters or character classes inside square brackets […] mean "search for any character among given." Brackets and sets are used to find a range of characters.

// Sets:-
// For instance, [aeio] means any of the 4 characters: 'a', 'e' , 'i', or 'o'. That is called a set. Sets can be used in a regular expressions along with regular characters:

// Ranges:-
// Square brackets may also contain character ranges. For instance, [a-z] is a character in range from a to z, and [0-9] is a digit from 0 to 9.

// xcluding ranges:-
// Besides normal ranges, there are "excluding" ranges that look like [^…]. They are denoted by a caret character ^ at the start and match any character except the given ones.

// For Example:

// [^aeiou] – any character except 'a', 'e', 'i' 'o' or'u'.
// [^0-5] – any character except a digit, the same as \D.
// [^\s] – any non-space character, same as \S.
// The following are the some common character set example.

// [abcdef]:-

// This expression will find any character between the brackets. Here is an example:

// Do a global search for the characters "D" and "o" in a string:

// let reg = /[Do]/gi;
// let str = "Do I Know You?";

// [^abcdef]:-
// This expression will find any character NOT between the brackets. Here is an example:

// Do a global search for characters that are NOT inside the brackets [abc]:

// let str = "Is this all there is?";
// let reg = /[^abc]/g;
// [0-9]:-

// This expression will find any character between the brackets (any digit). Here is an example:

// Do a global search for the numbers 1, 2, 3,4 and 5 in a string:

// let str = "123456789";
// let reg = /[1-5]/g;

// [^0-9]:-

// This expression will find any character NOT between the brackets (any non-digit).Here is an example:

// Do a global search for the numbers that are NOT 1 to 5 in a string.

// let str = "123456789";
// let reg = /[^1-5]/g;

// (a|b):-

// This expression will find any of the alternatives specified. Here is an example:

// Do a global search to find any of the specified alternatives (0|3|2):

// let str = "01234567890123456789";
// let reg = /(0|3|2)/g;
