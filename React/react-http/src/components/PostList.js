import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			errorMess: '',
		};
	}

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((resp) => {
				console.log(resp);
				this.setState({ posts: resp.data });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ errorMess: 'Error retreiving data' });
			});
	}

	render() {
		const { posts, errorMess } = this.state;
		return (
			<div>
				List of posts :
				{posts.length ? (
					posts.map((post) => <div key={post.id}>{post.title}</div>)
				) : (
					<div>{errorMess}</div>
				)}
				{/* {errorMess ? <div>{errorMess}</div> : null} */}
			</div>
		);
	}
}

export default PostList;
