var http = require("http");
var url = require("url");
var fs = require("fs");
fs.writeFile('test.txt', '1')
console.log('Server started')
http.createServer(function(request, response) {
	console.log('Server Request')
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	fs.readFile('test.txt', 'utf-8', function(error, data) {
		data = parseInt(data) + 1;
		fs.writeFile('test.txt', data);
		// var _get = url.parse(request.url, true).query;
		response.end('This page was refreshed ' + data + 'times.')
	});
}).listen(8888);