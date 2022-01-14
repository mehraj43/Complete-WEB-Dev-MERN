console.log('Welcome to tut 25');

/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// create a new element
let divElm = document.createElement('div');

// Add text to the created element
let val = localStorage.getItem('txt');
let txt;
if (val == null) {
	txt = document.createTextNode('Im an editable div click on me ');
} else {
	txt = document.createTextNode(val);
}

divElm.appendChild(txt);

// Give element id,class and style
divElm.setAttribute('id', 'elem');
divElm.setAttribute('class', 'elem');
divElm.setAttribute(
	'style',
	'border: 2px solid red;height:50px;;width:150px;margin:34px;padding:43px;'
);

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

// Insert Element before Element with id first
container.insertBefore(divElm, first);

console.log(divElm, container, first);

//add event listener to the divElm
divElm.addEventListener('click', function () {
	let notxtarea = document.getElementsByClassName('txtarea').length;
	if (notxtarea == 0) {
		let html = elem.innerHTML;
		divElm.innerHTML = `<textarea class="txtarea" id="txtarea" rows="3">${html}</textarea>`;
	}

	//listen for the blur event on texrarea
	let txtarea = document.getElementById('txtarea');
	txtarea.addEventListener('blur', function () {
		elem.innerHTML = txtarea.value;
		localStorage.setItem("txt",txtarea.value);
	});
});
