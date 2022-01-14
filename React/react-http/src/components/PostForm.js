import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userID: '',
			title: '',
			body: '',
		};
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then((resp) => {
				console.log(resp);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		const { userID, title, body } = this.state;
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<h1>Create Account</h1>
					<div>
						<label>
							UserID:
							<input
								name='userID'
								type='text'
								value={userID}
								onChange={this.changeHandler}
								required
							/>
						</label>
					</div>
					<div>
						<label>
							Title:
							<input
								name='title'
								type='text'
								value={title}
								onChange={this.changeHandler}
								required
							/>
						</label>
					</div>
					<div>
						<label>
							Body:
							<input
								name='body'
								type='text'
								value={body}
								onChange={this.changeHandler}
								required
							/>
						</label>
					</div>
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

export default PostForm;
