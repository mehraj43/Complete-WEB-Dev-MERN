console.log('This is tut 58 on sets');

//set stores unique values

const myset = new Set(); //initialize an empty set
console.log('The set looks like : ', myset);

//Adding values to the set
myset.add('this');
myset.add('My name');
myset.add('this');
myset.add('that');
myset.add('that2');
myset.add(false);
myset.add(true);
console.log('The set looks like this: ', myset);

console.log(myset.has('this'));

// use a constructor to initialize the set
const mySet2 = new Set([1, 45, 'this', false, { a: 4, b: 8 }, 'this']);
console.log('New set', mySet2);
console.log(mySet2.size);

console.log('The set looks like this: ', myset);
console.log('Before removal', myset.has('that2'));
myset.delete('that2');
console.log('After removal', myset.has('that2'));

// iterating a set
// for (let item of myset) {
// 	console.log('Item is : ', item);
// }

myset.forEach((item) => {
	console.log('Item is : ', item);
});

const myarr = Array.from(myset);
console.log(myarr);

console.log('------------------using for..in loop--------');
for (let ele in myarr) {
	console.log(myarr[ele]);
}
console.log('------------------using for..of loop--------');
for (let ele of myarr) {
	console.log(ele);
}

const duplicateArr = [
	1,
	2,
	4,
	1,
	5,
	2,
	'this',
	'that',
	'this',
	true,
	false,
	true,
];

console.log(duplicateArr);

function removeDuplicates(param) {
	param = new Set(param);
	return Array.from(param);
}

console.log(removeDuplicates(duplicateArr));


