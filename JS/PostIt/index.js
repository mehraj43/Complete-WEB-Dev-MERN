console.log('This is tut 63 on project 6 i.e. PostMan');

// Utility functions
// 1. utility function to get DOM element from string
function getElementFromString(string) {
	let div = document.createElement('div');
	div.innerHTML = string;
	return div.firstElementChild;
}

// initialize number of parameter
let addedParamsCount = 1;

// Hide the parameters bax initially
const parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// if the user clicks on params box, hide the json box
const paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
	document.getElementById('parametersBox').style.display = 'block';
	document.getElementById('requestJsonBox').style.display = 'none';
});

// if the user clicks on json box, hide the params box
const jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
	document.getElementById('requestJsonBox').style.display = 'block';
	document.getElementById('parametersBox').style.display = 'none';
});

// if the users clicks on + button, add more parameters
const addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
	let params = document.getElementById('params');
	let string = `<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${
											addedParamsCount + 1
										}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${
													addedParamsCount + 1
												}" placeholder="Enter parameter ${
		addedParamsCount + 1
	} key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${
													addedParamsCount + 1
												}" placeholder="Enter parameter ${
		addedParamsCount + 1
	} value">
                    </div>
                    <button class="btn btn-primary deleteParam">-</button>
                </div>`;

	// convert the element string to DOM element
	let paramElement = getElementFromString(string);
	console.log(paramElement);
	params.appendChild(paramElement);

	// Add an event listener to remove the parameter on clicking - button
	let deleteParam = document.getElementsByClassName('deleteParam');

	for (let item of deleteParam) {
		item.addEventListener('click', (e) => {
			e.target.parentElement.remove();
		});
	}

	addedParamsCount++;
});

// if the user clicks on submit button
const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
	//  show please wait in the response box to request patience from the user
	// document.getElementById('responseJsonText').value =
	// 	'Please wait .. Fetching response';

	document.getElementById('responsePrism').innerHTML =
		'Please wait .. Fetching response';
	Prism.highlightAll();

	// Fetch all the values user has entered
	const url = document.getElementById('url').value;
	const requestType = document.querySelector(
		"input[name='requestType']:checked"
	).value;
	const contentType = document.querySelector(
		"input[name='contentType']:checked"
	).value;

	//if users has used params option instead of json, collect all the parameters in an object
	if (contentType == 'params') {
		data = {};
		for (let i = 0; i < addedParamsCount + 1; i++) {
			if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
				let key = document.getElementById('parameterKey' + (i + 1)).value;
				let value = document.getElementById('parameterValue' + (i + 1)).value;
				data[key] = value;
			}
		}
		data = JSON.stringify(data);
	} else {
		data = document.getElementById('requestJsonText').value;
	}

	// log all the values in the console for debugging
	console.log('URL is: ', url);
	console.log('requestType is: ', requestType);
	console.log('contentType is: ', contentType);
	console.log('data is: ', data);

	// if the request type is GET, invoke fetch api to create a GET request
	if (requestType == 'GET') {
		fetch(url, {
			method: 'GET',
		})
			.then((response) => response.text())
			.then((text) => {
				// document.getElementById('responseJsonText').value = text;
				document.getElementById('responsePrism').innerHTML = text;
				Prism.highlightAll();
				// console.log(text);
			});
	} else {
		fetch(url, {
			method: 'POST',
			body: data,
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.text())
			.then((text) => {
				// document.getElementById('responseJsonText').value = text;
				document.getElementById('responsePrism').innerHTML = text;
				Prism.highlightAll();
				// console.log(text);
			});
	}
});

// api: https://jsonplaceholder.typicode.com/posts
// api: https://randomuser.me/api/
