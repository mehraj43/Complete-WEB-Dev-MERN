console.log('Welcome to tut 30');

const proto = {
	slogan: function () {
		return 'This company is the best';
	},
	changeName: function (givenName) {
		this.name = givenName;
	},
};

// This creates harry object
let harry = Object.create(proto);
harry.name = 'Harry';
harry.role = 'Programmer';
harry.changeName('Malik@43');

console.log(harry);

// This also creates harry object
const harry1 = Object.create(proto, {
	name: { value: 'harry', writable: true },
	role: { value: 'Programmer' },
});

harry1.changeName('Harry2');
console.log(harry1);

// Employee constructor

function Employee(name, salary, exp) {
	this.name = name;
	this.salary = salary;
	this.exp = exp;
}

//slogan
Employee.prototype.slogan = function () {
	return `This company is the best. Regards, ${this.name}`;
};

let harryObj = new Employee('Meraj', 30000, 5);
console.log(harryObj);
console.log(harryObj.slogan());

//Programmer Object creation using inheritance
function Programmer(name, salary, exp, language) {
	Employee.call(this, name, salary, exp);
	this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer('Rohan', 12000, 2, 'JavaScript');
console.log(rohan);

function food(chef, flour, cream, sweet) {
	this.chef = chef;
	this.flour = flour;
	this.cream = cream;
	this.sweet = sweet;
}

food.prototype.reci = function () {
	return `This are the things required to bake a cake. Regards, ${this.chef}`;
};

let chefz = new food('Malik', 'baking flour', 'cheeeze cream', 'chocolate');

console.log(chefz);

function cake(chef, flour, cream, sweet, extra) {
	food.call(this, chef, flour, cream, sweet);
	this.extra = extra;
}

cake.prototype = Object.create(food.prototype);

cake.prototype.constructor = food;

let cakes = new cake(
	'Malik',
	'baking flour',
	'cheeeze cream',
	'chocolate',
	'cherry'
);

console.log(cakes);
