console.log('Welcome to tut 37 i.e. Callback Function');

const students = [
	{ name: 'harry', sunject: 'Javascript' },
	{ name: 'Rohan', sunject: 'Java' },
];

function enrollStudent(student, Callback) {
	setTimeout(function () {
		students.push(student);
		// document.write('Student have been enrolled');
		Callback();
	}, 1000);
}

function getStudents() {
	setTimeout(() => {
		let str = '';
		students.forEach(function (ele) {
			str += `<li> ${ele.name} </li>`;
		});
		document.getElementById('students').innerHTML = str;
	}, 3000);
}

let newStudent = { name: 'Sunny', subject: 'Python' };
enrollStudent(newStudent, getStudents);
// getStudent();
