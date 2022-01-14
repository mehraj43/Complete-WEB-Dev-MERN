console.log('Welcome to tut 39b ');

// A promise has three states:

// pending: It is the initial state.
// Fulfilled: It indicates that the promised operation was successful.
// Rejected: It indicates that the promised operation was unsuccessful.

const students = [
	{ name: 'harry', sunject: 'Javascript' },
	{ name: 'Rohan', sunject: 'Java' },
];

function enrollStudent(student) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			students.push(student);
			console.log('Student has been enrolled');
			const err = false;
			if (!err) {
				resolve();
			} else {
				reject();
			}
		}, 3000);
	});
}

function getStudents() {
	setTimeout(() => {
		let str = '';
		students.forEach(function (ele) {
			str += `<li> ${ele.name} </li>`;
			// console.log(str);
		});
		document.getElementById('students').innerHTML = str;
		console.log('Students have been fetched');
	}, 1000);
}

let newStudent = { name: 'Sunny', subject: 'Python' };
enrollStudent(newStudent)
	.then(getStudents)
	.catch(function () {
		console.log('Some error occured');
	});

// getStudent();
// function inside then is ran as - resolve()
// function inside catch is ran as - reject()

// A promise is created using a constructor that takes a call back function with two arguments resolve and reject in line 1. If the task is successful(x===y), the promise is resolved. If the task is unsuccessful(x is not equal to y), then the promise is rejected. The then() method is called if the promise is resolved, and the catch() method is called when the promise is rejected or if an error occurred during the code execution.

// Promises are the ideal choice for asynchronous programming. Promises can handle multiple asynchronous operations easily and are better at error handling as compared to callbacks and events.

// Benefits of Promises:-
// It improves the code readability
// It is better in the handling of asynchronous operations
// It has a better flow of control definition in asynchronous logic
// It is better in error handling
