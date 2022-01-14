import React, { Component } from 'react';

class ClassClick extends Component {
	clickme() {
		console.log('Click Me');
	}
	render() {
		return (
			<div>
				<button onClick={this.clickme}>Click Me</button>
			</div>
		);
	}
}

export default ClassClick;
