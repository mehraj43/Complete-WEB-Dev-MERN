console.log('Welcome to tut 36');

// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
	constructor(bookList) {
		this.bookList = bookList;
		this.issuedBooks = {};
	}

	getBookList() {
		this.bookList.forEach((element) => {
			console.log(element);
		});
	}

	issueBook(bookName, user) {
		if (this.issuedBooks[bookName] == undefined) {
			this.issuedBooks[bookName] = user;
		} else {
			console.log('This book is already issued!');
		}
	}

	returnBook(bookName) {
		delete this.issuedBooks[bookName];
	}
}

let harrylib = new Library(['Game of Thrones', 'War of Roses', 'Harry Potter']);
console.log(harrylib.bookList);
console.log(harrylib.getBookList());
// console.log(harrylib.issueBook("Game of Thrones","harry"));
// console.log(harrylib.issueBook("Game of Thrones","Rohan"));
// console.log(harrylib.returnBook("Game of Thrones"));
// console.log(harrylib.issueBook("Game of Thrones","Rohan"));
