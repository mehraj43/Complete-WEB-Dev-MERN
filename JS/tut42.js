console.log('Welcome to tut 42 i.e. fetch api');

// Button with id myBtn
let myBtn = document.getElementById('myBtn');

// div with id content
let content = document.getElementById('content');

let getData = () => {
	console.log('Started getData');
	let url = 'Ajax/harry.txt';
	fetch(url)
		.then((response) => {
			console.log('Inside first then');
			return response.text();
		})
		.then((data) => {
			console.log('Inside second then');
			console.log(data);
		});
};
// Before running getData
getData();
// After running getData

let getDataApi = () => {
	console.log('Started getDataApi');
	let url = 'https://api.github.com/users';
	fetch(url)
		.then((response) => {
			console.log('Inside first then of getDataApi');
			return response.json();
		})
		.then((data) => {
			console.log('Inside second then of getDataApi');
			console.log(data);
		});
};

// Before running getDataApi
getDataApi();
// After running getDataApi

let postDataApi = () => {
	let url = 'http://dummy.restapiexample.com/api/v1/create';

	// let data = '{"name":"testvfdbf","salary":"123","age":"23"}';
	let data = { name: 'testkjdvjkdlj', salary: '123', age: '23' };
	let params = {
		method: 'post',
		header: {
			'Content-Type': 'application/json',
		},
		// when using object you need to use JSON.stringify()
		body: JSON.stringify(data),
		// when using string no need to use JSON.stringify()
		// body: data
	};
	fetch(url, params)
		.then((response) => response.json())
		.then((data) => console.log(data));
};

postDataApi();
