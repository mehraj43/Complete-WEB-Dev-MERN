import './App.css';
import About from './components/About';
import { Navbar } from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	const removeBodyClasses = () => {
		document.body.classList.remove('bg-light');
		document.body.classList.remove('bg-dark');
		document.body.classList.remove('bg-warning');
		document.body.classList.remove('bg-danger');
		document.body.classList.remove('bg-success');
	};

	const toggleMode = (cls) => {
		removeBodyClasses();
		console.log(cls);
		document.body.classList.add('bg-' + cls);
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#042743';
			showAlert('Dark mode has been enabled', 'success');
			// document.title = 'TextUtils - Dark Mode';
			// setInterval(() => {
			// 	document.title = 'TextUtils is Amazing Mode';
			// }, 2000);
			// setInterval(() => {
			// 	document.title = 'Installing TextUtils Now';
			// }, 1500);
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert('Light mode has been enabled', 'success');
			document.title = 'TextUtils - Light Mode';
		}
	};

	return (
		<>
			{/* <Navbar title={'TextUtils'} aboutText={'About TextUtils'} /> */}
			{/* <Navbar /> */}
			<Router>
				<Navbar title={'TextUtils'} mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<div className='container my-3'>
					<Routes>
						<Route path='/about' element={<About />} />
						<Route
							path='/'
							element={
								<TextForm
									heading='Enter the text below to convert :'
									mode={mode}
									showAlert={showAlert}
								/>
							}
						/>
					</Routes>
					{/* <About /> */}
				</div>
			</Router>
		</>
	);
}

export default App;
