console.log('welcome to tut 31');

class Employee {
	constructor(givenName, givenXp, givenSalary) {
		this.name = givenName;
		this.exp = givenXp;
		this.salary = givenSalary;
	}

	slogan() {
		return `I am ${this.name} and this company is the best`;
	}

	joingYear() {
		return 2021 - this.exp;
	}

	static add(a, b) {
		return a + b;
	}
}

let harry = new Employee('Malik', 3, '30000');
console.log(harry.slogan());
console.log(harry.joingYear());
console.log(Employee.add(40, 3));

class Programmer extends Employee {
	constructor(givenName, givenXp, givenSalary, language, github) {
		super(givenName, givenXp, givenSalary);
		this.language = language;
		this.github = github;
	}

	favlang() {
		if (this.language == 'javascript') {
			return 'JS';
		} else {
			return 'Java';
		}
	}

	static multiply(a, b) {
		return a * b;
	}
}

let person = new Programmer('Raju', 5, 25000, 'javascript', 'raju@me');

console.log(person);
console.log(person.favlang());
console.log(Programmer.multiply(4, 6));
