console.log(__dirname);

const http = require('http');

const server = http.createServer((request, response) => {

	console.log('Server connected');
	response.setHeader('Content-type', 'text/html');
	response.end('<h1>Header</h1>');
})

server.listen(3000);