console.log('Welcome to tut 34 i.e Asynchronous Programming');

setTimeout(() => {
	for (let index = 0; index < 4005; index++) {
		const element = index;
		console.log(element);
	}
}, 100);

// for (let index = 0; index < 4005; index++) {
//     const element = index;
//     console.log(element);
// }
console.log('Done printing');


