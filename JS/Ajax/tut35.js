console.log('Welcome to tut 35 i.e Complete Ajax tutorial');

let fecthBtn = document.getElementById('fecthBtn');
fecthBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
	console.log('You have clicked the fetch button');

	//Instantiate an xhr object
	let xhr = new XMLHttpRequest();

	// open the object
	xhr.open('Get', 'harry.txt', true);

	// what to do on progress
	xhr.onprogress = function () {
		console.log('On progress');
	};

	// xhr.onreadystatechange = function () {
	// 	console.log('Ready state is: ', xhr.readyState);
	// };

	// what to do when response is ready
	xhr.onload = function () {
		if (this.status == 200) {
			console.log(this.responseText);
		} else {
			console.error('Something went wrong');
		}
	};

	//send the request
	xhr.send();

	console.log(
		'this is asynchronous since we pass the parameter as true by default it is true'
	);
}

// Value	State	              Description
// 0	    UNSENT,	            Client has been created. open() not called yet.
// 1	    OPENED,	            open() has been called.
// 2	    HEADERS_RECEIVED,	send() has been called, and headers and status are available.
// 3	    LOADING,	            Downloading; responseText holds partial data.
// 4	    DONE,	            The operation is complete.

let backupBtn = document.getElementById('backupBtn');
backupBtn.addEventListener('click', callme);

function callme() {
	console.log('You have clicked the Backup button');

	//Instantiate an xhr object
	let xhr = new XMLHttpRequest();

	// open the object
	xhr.open('Get', 'https://jsonplaceholder.typicode.com/todos/1', false);

	// what to do on progress
	xhr.onprogress = function () {
		console.log('On progress');
	};

	// xhr.onreadystatechange = function () {
	// 	console.log('Ready state is: ', xhr.readyState);
	// };

	// what to do when response is ready
	xhr.onload = function () {
		if (this.status == 200) {
			console.log(this.responseText);
		} else {
			console.error('Something went wrong');
		}
	};

	//send the request
	xhr.send();

	console.log('this is not asynchronous since we pass the parameter as false');
}

//Post request method
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', postData);

function postData() {
	console.log('You have clicked the Fetch button');

	//Instantiate an xhr object
	let xhr = new XMLHttpRequest();

	// open the object
	xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
	xhr.getResponseHeader('Content-type', 'application/json');

	// what to do on progress
	xhr.onprogress = function () {
		console.log('On progress');
	};

	// xhr.onreadystatechange = function () {
	// 	console.log('Ready state is: ', xhr.readyState);
	// };

	// what to do when response is ready
	xhr.onload = function () {
		if (this.status == 200) {
			console.log(this.responseText);
		} else {
			console.error('Something went wrong');
		}
	};

	let params = `{"name":"test","salary":"123","age":"21"}`;

	//send the request
	xhr.send(params);
}

let getBtn = document.getElementById('getBtn');
getBtn.addEventListener('click', getData);

function getData() {
	console.log('You have clicked the Populate button');

	//Instantiate an xhr object
	let xhr = new XMLHttpRequest();

	// open the object
	xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
	xhr.getResponseHeader('Content-type', 'application/json');

	// what to do on progress
	xhr.onprogress = function () {
		console.log('On progress');
	};

	// xhr.onreadystatechange = function () {
	// 	console.log('Ready state is: ', xhr.readyState);
	// };

	// what to do when response is ready
	xhr.onload = function () {
		if (this.status == 200) {
			let obj = JSON.parse(this.responseText);
			console.log(obj);
			let list = document.getElementById('list');
			let str = '';
			for (const key in obj.data) {
				str += `<li> ${obj.data[key].employee_name} </li>`;
				// use of// str += `<li> ${key.employee_name} </li>`;
			}
			list.innerHTML = str;
		} else {
			console.error('Something went wrong');
		}
	};

	//send the request
	xhr.send();
}
