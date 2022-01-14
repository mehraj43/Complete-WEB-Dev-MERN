const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res
		.status(200)
		.send('This is my homepage of first express app with Harry Bhai');
});

app.get('/about', (req, res) => {
	res.send('This is my first about page express app with Harry Bhai');
});
app.post('/about', (req, res) => {
	res.send(
		'This is my post request first about page express app with Harry Bhai'
	);
});

app.get('/this', (req, res) => {
	res.status(404).send('This page not found');
});

app.listen(port, () => {
	console.log(`The app started successfully on port ${port}`);
});

// string to Int in MongoDB
// db.tymalik.find().forEach( function (d) {
// 	    d.videos= parseInt(d.videos);
// 	    db.tymalik.save(d);
// 	 });
