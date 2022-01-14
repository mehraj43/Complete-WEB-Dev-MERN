console.log('This is tut 66');

const http = require('http');
const fs = require('fs');

const hostName = '127.0.0.1';
const port = 3000;

const fileContent = fs.readFileSync('tut61.html');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Conten-type': 'text/html' });
	res.end(fileContent);
});

server.listen(port, hostName, () => {
	console.log(`Listening on http://${hostName}:${port}`);
});
