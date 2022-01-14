console.log('this is tut49 on regular expressions shorthand character classes');

// Character classes
let regex = /\war/; //word character - _ or alphabet or numbers
regex = /\w+d1r/; // \w+ means one or more word characters
regex = /\Wbhai/; // Non word character
regex = /\W+bhai/; // \W+ means more than one Non word character
regex = /number \d999/; // \d means digit
regex = /number \d+/; // \d+ means more than one digit
regex = /\D999/; // \D means non digit
regex = /\D+999/; // \D+ means more than one non digit
regex = /\ska number/; // Match whitespace character
regex = /\s+ka number/; // \s+ means match one or more than one whitespace characters
regex = /\Ska number/; // Match non whitespace character
regex = /\S+ka number/; // Match one or more than one non whitespace character
regex = /4r5r\b/; // word boundary

// Assertions
regex = /h(?=y)/;
regex = /h(?!y)/;
str = 'harh7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999';

let result = regex.exec(str);
console.log('The result from exec is ', result);

if (regex.test(str)) {
	console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
	console.log(
		`The string ${str} does not match the expression ${regex.source}`
	);
}

// As we know, the character ranges are very useful while writing a regular expression. However, they can be hectic to write out every time we want to match common ranges, such as those that designate alphabetical characters or digits. To get rid of this pain, shorthand character classes represent common ranges, and they make writing regular expressions much simpler. As we have seen from the previous tutorial examples about character set of regular expressions, certain character classes, such as digits [0-9] or characters [0-9A-Za-z_], are used in most regex patterns.

// These shorthand classes include:
// \w:  This is the "word character" class that represents the regex range [A-Za-z0-9_], and it will match a single uppercase character, lower-case character, digit, or underscore
// \d: This is the "digit character" class represents the regex range [0-9], and it will match the single-digit character
// \s: This is the "whitespace character" class that represents the regex range, matching a single space, carriage return, tab, line break, form feed, or vertical tab
// Along with shorthand character classes( \w, \d, and \s), we can also use the negated shorthand character classes. These negated shorthands will match any character that is NOT in the regular shorthand classes.

//  These negated shorthand classes include:

// \W: the "non-word character" class represents the regex range [^A-Za-z0-9_], matching any character that is not included in the range represented by \w
// \D: the "non-digit character" class represents the regex range [^0-9], matching any character that is not included in the range represented by \d
// \S: the “non-whitespace character” class represents the regex range [^ \t\r\n\f\v], matching any character that is not included in the range represented by \s

// Assertions:-
// An Assertion is a regular expression that will succeed if a match is found and fails if a match is not found. Assertion consists of Anchors and Lookarounds.

//  ^: The symbol "^" matches at the beginning of the string.
//  $: The symbol "$" matches only at the end of the string.
//  \b: The character "\b" matches only at a word boundary.
//  \B: the character "\B" Matches only if not at a word boundary.
//  (?=«pattern»): This is a positive lookahead. It matches the regular expression with the pattern only if the pattern matches what comes next. The pattern is used only to look ahead but otherwise ignored.
//  (?!«pattern»): This is the negative lookahead: It matches the regular expression with the pattern only if the pattern does not match what comes next. The pattern is used only to look ahead but otherwise ignored.
