import React from 'react';
import Person from './Person';

function ListRendering() {
	const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
	const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>);
	console.log(nameList);
	return <div>{nameList}</div>;

	const persons = [
		{
			id: 1,
			name: 'Bruce',
			age: 30,
			skill: 'React',
		},
		{
			id: 2,
			name: 'Clark',
			age: 25,
			skill: 'Angular',
		},
		{
			id: 3,
			name: 'Diana',
			age: 28,
			skill: 'Vue',
		},
	];

	// const personList = persons.map((person) => (
	// 	<Person key={person.id} person={person} />
	// ));
	// console.log(personList);
	// return <div>{personList}</div>;
}

export default ListRendering;

// A “key” is a special string attribute you need to include when creating lists of elements.
// Keys give the elements a stable identity.
// Keys help React identify which items have changed, are added, or are removed.
// This results in a much more efficient update of the user interface.
