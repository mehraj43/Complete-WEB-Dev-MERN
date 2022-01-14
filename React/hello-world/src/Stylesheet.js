import React from 'react';
import './myStyles.css';
function Stylesheet(props) {
	const className = props.primary ? 'primary' : '';
	return (
		<div>
			{/* <h2 className='primary font-xl'>Stylesheets</h2> */}
			<h2 className={`${className} font-xl`}>Stylesheets</h2>
		</div>
	);
}

export default Stylesheet;
