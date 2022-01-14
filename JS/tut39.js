// A promise has three states:

// pending: It is the initial state.
// Fulfilled: It indicates that the promised operation was successful.
// Rejected: It indicates that the promised operation was unsuccessful.

console.log('Welcome to tut 39 i.e. Promise');

function func1() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			const err = true;
			if (!err) {
				console.log('Function: Your promise has been resolved');
				resolve();
			} else {
				console.log('Function: Your promise has not been resolved');
				reject('Sorry not fullfilled');
			}
		}, 2000);
	});
}

func1()
	.then(function () {
		console.log('Harry: Thanks for resolving');
	})
	.catch(function (erro) {
		// console.log('Harry: Very bad bro.Reason: ' + erro);
		console.log(`Harry: Very bad bro. Reason: ${erro}`);
	});

// A promise is created using a constructor that takes a call back function with two arguments resolve and reject in line 1. If the task is successful(x===y), the promise is resolved. If the task is unsuccessful(x is not equal to y), then the promise is rejected. The then() method is called if the promise is resolved, and the catch() method is called when the promise is rejected or if an error occurred during the code execution.

// Promises are the ideal choice for asynchronous programming. Promises can handle multiple asynchronous operations easily and are better at error handling as compared to callbacks and events.

// Benefits of Promises:-
// It improves the code readability
// It is better in the handling of asynchronous operations
// It has a better flow of control definition in asynchronous logic
// It is better in error handling
