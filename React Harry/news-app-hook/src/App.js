import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
const App = () => {
	const pageSize = 10;
	const apiKey = process.env.REACT_APP_NEWS_API;

	const [progress, setProgress] = useState(0);
	return (
		<Router>
			<div>
				<NavBar />
				<LoadingBar height={3} color='#f11946' progress={progress} />
				<Routes>
					<Route
						path='/'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='general'
								pageSize={pageSize}
								country='in'
								category='general'
							/>
						}
					/>
					<Route
						path='/business'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='business'
								pageSize={pageSize}
								country='in'
								category='business'
							/>
						}
					/>
					<Route
						path='/entertainment'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='entertainment'
								pageSize={pageSize}
								country='in'
								category='entertainment'
							/>
						}
					/>
					<Route
						path='/general'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='general'
								pageSize={pageSize}
								country='in'
								category='general'
							/>
						}
					/>
					<Route
						path='/health'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='health'
								pageSize={pageSize}
								country='in'
								category='health'
							/>
						}
					/>
					<Route
						path='/science'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='science'
								pageSize={pageSize}
								country='in'
								category='science'
							/>
						}
					/>
					<Route
						path='/sports'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='sports'
								pageSize={pageSize}
								country='in'
								category='sports'
							/>
						}
					/>
					<Route
						path='/technology'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='technology'
								pageSize={pageSize}
								country='in'
								category='technology'
							/>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default App;
