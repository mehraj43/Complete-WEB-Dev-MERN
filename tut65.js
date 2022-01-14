console.log('This is tut 65');

// Synchronous or blocking:
// line by line execution

// ASynchronous or Non-blocking:
// line by line execution not guaranteed

const fs = require('fs');
fs.readFile('dele.txt', 'utf-8', (err, data) => {
	console.log(err, data);
	// console.log(err + ' \n' + data);
	// console.log(err , ' \n' , data);
});
console.log('This is a message');
