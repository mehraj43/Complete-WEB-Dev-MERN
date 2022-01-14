import React from 'react';

const Greet = (props) => {
	// console.log(props);
	const { name, heroName } = props;
	return (
		<div>
			<h1>
				{/* Hello {props.name} a.k.a {props.heroName} */}
				Hello {name} a.k.a {heroName}
			</h1>
			{/* {props.children}     */}
		</div>
	);
};

export default Greet;
