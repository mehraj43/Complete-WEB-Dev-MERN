import React, { useState } from 'react';

export default function TextForm(props) {
	const [text, setText] = useState('');

	const handleChange = (e) => {
		// console.log('On change');
		setText(e.target.value);
	};

	const handleUpClick = () => {
		// console.log(`Uppercase was clicked: ${text}`);
		setText(text.toUpperCase());
		props.showAlert('Converted to Upper Case', 'success');
	};

	const handleLoClick = () => {
		// console.log(`Uppercase was clicked: ${text}`);
		setText(text.toLowerCase());
		props.showAlert('Converted to Lower Case', 'success');
	};

	const handleClearClick = () => {
		// console.log(`Uppercase was clicked: ${text}`);
		setText('');
		props.showAlert('Text has been cleared', 'success');
	};

	const handleCopy = () => {
		// console.log('I am copy');
		// let text = document.getElementById('myBox');
		// text.select();
		// navigator.clipboard.writeText(text.value);
		navigator.clipboard.writeText(text);
		// document.getSelection().removeAllRanges();
		props.showAlert('Copied to clipboard', 'success');
	};

	const handleExtraSpaces = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(' '));
		props.showAlert('All the extra spaces has been removed', 'success');
	};

	return (
		<>
			<div
				className='container'
				style={{
					color: props.mode === 'dark' ? 'white' : 'black',
				}}
			>
				<h1>{props.heading}</h1>
				<div className='mb-3'>
					<textarea
						className='form-control'
						id='myBox'
						rows='8'
						value={text}
						onChange={handleChange}
						style={{
							backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
							color: props.mode === 'dark' ? 'white' : 'black',
						}}
					></textarea>
				</div>
				<button
					disabled={text.length === 0}
					className='btn btn-primary mx-2 my-1'
					onClick={handleUpClick}
				>
					Convert to UpperCase
				</button>
				<button
					disabled={text.length === 0}
					className='btn btn-primary mx-2 my-1'
					onClick={handleLoClick}
				>
					Convert to LowerCase
				</button>
				<button
					disabled={text.length === 0}
					className='btn btn-primary mx-2 my-1'
					onClick={handleClearClick}
				>
					Clear Text
				</button>
				<button
					disabled={text.length === 0}
					className='btn btn-primary mx-2 my-1'
					onClick={handleCopy}
				>
					Copy Text
				</button>
				<button
					disabled={text.length === 0}
					className='btn btn-primary mx-2 my-1'
					onClick={handleExtraSpaces}
				>
					Remove Extra Spaces
				</button>
			</div>
			<div
				className='container my-3'
				style={{
					color: props.mode === 'dark' ? 'white' : 'black',
				}}
			>
				<h2>Your text summary</h2>
				<p>
					{
						text.split(/\s+/).filter((ele) => {
							return ele.length !== 0;
						}).length
					}{' '}
					words {text.length} characters
				</p>
				<p>
					{0.008 *
						text.split(' ').filter((ele) => {
							return ele.length !== 0;
						}).length}{' '}
					Minutes read
				</p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : 'Nothing to preview'}</p>
			</div>
		</>
	);
}
