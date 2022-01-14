console.log('This is tut51 on iterators');
// Iterators
const fruitsIterator = (values) => {
	let nextIndex = 0;
	//we will return an object
	return {
		next: () => {
			if (nextIndex < values.length) {
				//we will return below object
				return {
					value: values[nextIndex++],
					done: false,
				};
			} else {
				return {
					done: true,
				};
			}
		},
	};
};

const myArr = ['Apple', 'Oranges', 'Grapes', 'Bhindi'];
console.log('My array is : ', myArr);

// Using the iterator
const fruits = fruitsIterator(myArr);
console.log(fruits.next());
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
