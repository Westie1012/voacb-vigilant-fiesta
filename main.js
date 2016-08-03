// Include http module, 
var http = require("http");
// And mysql module you've just installed. 
 mysql = require("mysql"); 
// And url module, which is very helpful in parsing request parameters. 
	url = require("url");


http.createServer(function (request, response) {
	// Attach listener on end event.
	// This event is called when client sent all data and is waiting for response.
	request.on("end", function () {
		// Write headers to the response.
		// 200 is HTTP status code (this one means success)
		// Second parameter holds header fields in object
		// We are sending plain text, so Content-Type should be text/plain
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		// Send data and end response.
		response.end('Hello HTTP!');
	});
// Listen on the 8080 port.
}).listen(8080);

// Create the connection. 
// Data is default to new mysql installation and should be changed according to your configuration. 
var connection = mysql.createConnection({ 
	user: "root", 
	password: "", 
	database: "vocab"
}); 
connection.connect();
connection.query('SELECT * from words', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();
// Create the http server. 
// http.createServer(function (request, response) { 
// 	// Attach listener on end event. 
// 	request.on('end', function () { 
// 		// Query the database. 
// 		connection.query('SELECT * FROM your_table;', function (error, rows, fields) { 
// 			response.writeHead(200, { 
// 				'Content-Type': 'x-application/json' 
// 			}); 
// 			// Send data as JSON string. 
// 			// Rows variable holds the result of the query. 
// 			response.end(JSON.stringify(rows)); 
// 		}); 
// 	}); 
// // Listen on the 8080 port. 
// }).listen(8080);