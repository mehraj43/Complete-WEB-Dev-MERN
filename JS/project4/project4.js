console.log('This is project 4 on form validation using regex');

const uname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validemail = false;
let validuname = false;
let validphone = false;
$('#failure').hide();
$('#success').hide();

// console.log(uname, email, phone);

uname.addEventListener('blur', () => {
	console.log('name is blurred');
	//validate name here
	let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
	let str = uname.value;
	console.log(regex.source, str);
	if (regex.test(str)) {
		console.log('Your name is valid');
		uname.classList.remove('is-invalid');
		validuname = true;
	} else {
		console.log('Your name is not valid');
		uname.classList.add('is-invalid');
		validuname = false;
	}
});

email.addEventListener('blur', () => {
	console.log('email is blurred');
	//validate email here
	let regex = /^([_\-0-9a-zA-Z]+)@([_\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let str = email.value;
	console.log(regex.source, str);
	if (regex.test(str)) {
		console.log('Your email is valid');
		email.classList.remove('is-invalid');
		validemail = true;
	} else {
		console.log('Your email is not valid');
		email.classList.add('is-invalid');
		validemail = false;
	}
});

phone.addEventListener('blur', () => {
	console.log('phone is blurred');
	//validate phone here
	let regex = /^\+91([0-9]){10}$/;
	let str = phone.value;
	console.log(regex.source, str);
	if (regex.test(str)) {
		console.log('Your phone number is valid');
		phone.classList.remove('is-invalid');
		validphone = true;
	} else {
		console.log('Your phone number is not valid');
		phone.classList.add('is-invalid');
		validphone = false;
	}
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
	// e.preventDefault();
	console.log('you clicked  on submit');
	// submit your form here
	if (validemail && validuname && validphone) {
		let failure = document.getElementById('failure');

		console.log('Your form has been successfully submitted');
		let success = document.getElementById('success');
		success.classList.add('show');
		// failure.classList.remove('show');
		$('#failure').hide();
		$('#success').show();
	} else {
		console.log(
			'One of phone,email or username is not valid so your form has not been submitted.plz correct the errors and try again'
		);
		let failure = document.getElementById('failure');
		failure.classList.add('show');
		// success.classList.remove('show');
		$('#success').hide();
		$('#failure').show();
	}
});
