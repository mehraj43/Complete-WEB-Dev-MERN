console.log('welcome to tut 33 i.e project 2');

// Todos:
// 1. store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view

// Constructor
function Book(name, author, type) {
	this.name = name;
	this.author = author;
	this.type = type;
}

// Display constructor
function Display() {}

// Add methods to display prototype
Display.prototype.add = function (book) {
	console.log('Adding to UI');
	let tablebody = document.getElementById('tablebody');
	let ustring = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;

	tablebody.innerHTML += ustring;
};

//Implement the clear function
Display.prototype.clear = function () {
	let libraryForm = document.getElementById('libraryForm');
	libraryForm.reset();
};

//Implement the validate function
Display.prototype.validate = function (book) {
	if (book.name.length < 3 || book.author.length < 3) {
		return false;
	} else {
		return true;
	}
};

// Implement the show function
Display.prototype.show = function (type, displayMessage) {
	let message = document.getElementById('message');
	message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
							<strong>Message:</strong> ${displayMessage}
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>`;
	setTimeout(() => {
		message.innerHTML = '';
	}, 2000);
};

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
	console.log('You submitted the form');
	let name = document.getElementById('bookName').value;
	let author = document.getElementById('author').value;
	let type;

	let fict = document.getElementById('fiction');
	let prog = document.getElementById('programming');
	let cook = document.getElementById('cooking');

	if (fict.checked) {
		type = fict.value.toUpperCase();
	} else if (prog.checked) {
		type = prog.value.toUpperCase();
	} else if (cook.checked) {
		type = cook.value.toUpperCase();
	}

	let book = new Book(name, author, type);
	console.log(book);

	let display = new Display();

	if (display.validate(book)) {
		display.add(book);
		display.clear();
		display.show('success', 'Your book has been added succesfully');
	} else {
		display.show('danger', 'Sorry you cannot add this book.');
	}

	e.preventDefault();
}
