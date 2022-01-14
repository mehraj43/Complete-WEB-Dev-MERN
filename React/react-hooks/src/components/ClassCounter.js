import React, { Component } from 'react';

class ClassCounter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	incrementCount = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});
		// this.setState({
		// 	count: this.state.count + 1,
		// });
	};

	render() {
		// const { count } = this.state;
		return (
			<div>
				{/* <button onClick={this.incrementCount}>Click {count} times</button> */}
				<button onClick={this.incrementCount}>
					ClassCount:{this.state.count}
				</button>
			</div>
		);
	}
}

export default ClassCounter;
