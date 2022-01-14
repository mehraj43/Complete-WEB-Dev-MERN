console.log('This is tut 53 on generators');
// generators in js

function* numbersGen() {
	let i = 0;

	// yield 1;
	// yield 2;
	// yield 3;
	// yield 4;
	while (true) {
		yield i++;
		// yield (i++).toString();
	}
}

const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);

console.log('\n');

function* myGenerator() {
	yield 1;
	yield 2;
}
let iterator = myGenerator();
let result;
do {
	result = iterator.next();
	console.log(result);
} while (!result.done);
//Output:-
//{value: 1, done: false}
//{value: 2, done: false}
//{value: undefined, done: true}

console.log('\n');

function* makeIterator() {
	yield 1;
	yield 2;
	yield 'Hello World';
	console.log('We are back again');
}

const it = makeIterator();

console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log('\n');

for (const itItem of it) {
	console.log(itItem);
}

// console.log(it[Symbol.iterator]() === it); // true;

// This example show us generator(iterator) is iterable object,
// which has the @@iterator method return the it (itself),
// and consequently, the it object can iterate only _once_.

// If we change it's @@iterator method to a function/generator
// which returns a new iterator/generator object, (it)
// can iterate many times

// it[Symbol.iterator] = function* () {
// 	yield 2;
// 	yield 1;
// };
