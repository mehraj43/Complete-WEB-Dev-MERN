console.log('welcome to tut 27');

// Object literal for creating objects
let car = {
	name: 'Maruti 800',
	topSpeed: 89,
	run: function () {
		console.log('car is running');
	},
};

// we have already seen constructors like these:
// new Date();

function GMotors(givenName, givenspeed) {
	this.name = givenName;
	this.speed = givenspeed;
	this.run = function () {
		console.log(`${this.name} is running`);
	};
	this.analyze = function () {
		console.log(
			`This is car is slower by ${200 - this.speed} Km/H than Mercedes`
		);
	};
}

let car1 = new GMotors('Nissan', 180);
let car2 = new GMotors('Maruti Alto', 180);
let car3 = new GMotors('Mercedes', 180);

console.log(car1, car2, car3);
