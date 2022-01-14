console.log('This is tut 60 on destructuring');

//Array Destructuring
let a, b;
[a, b] = [43, 56];
console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b, c, d);

({ a, b, c, ...d } = { a: 34, b: 56, c: 76, d: 98, e: 66 });
console.log(a, b, c, d);

const fruits = ['Apple', 'Mangoes', 'Pomogrenate'];
[a, b, c] = fruits;
console.log(a, b, c);

//Object Destructuring
const laptop = {
	name: 'HP',
	age: '4 years',
	model: 'I123A',
	net: 1233,
	start: () => {
		console.log('Started');
	},
};

const { name, model, age, net, start } = laptop;
console.log(name, model, age, net, start);
start();
