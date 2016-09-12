var http = require('http');
var fs = require('fs');

var server = 
	http.createServer(function(request, response) {
		var url = request.url;
		if(url === '/') {
			fs.readFile('./bestgif1.html',function(err, data) {
				response.write(data.toString());
				response.end();
			})
		}
		else if(url === '/bestgif2') {
			fs.readFile('./bestgif2.html', function(err, data) {
				response.write(data.toString());
				response.end();
			})
		}
		else if(url === '/bestgif3') {
			fs.readFile('./bestgif3.html', function(err, data) {
				response.write(data.toString());
				response.end();
			})
		}
		else if(url === '/bestgif4') {
			fs.readFile('./bestgif4.html', function(err, data) {
				response.write(data.toString());
				response.end();
			})
		}
		else if(url === '/bestgif5') {
			fs.readFile('./bestgif5.html', function(err, data) {
				response.write(data.toString());
				response.end();
			})
		}
		else if(url === '/bestgif.css') {
			fs.readFile('./bestgif.css', function(err, data) {
				response.writeHead(200, {'Content-Type': 'text/css'});
				response.write(data.toString());
				response.end();
			})
		}
		else if(url === '/bestgif.js') {
			fs.readFile('./bestgif.js', function(err, data) {
				response.writeHead(200, {'Content-Type': 'text/javascript'});
				response.write(data.toString());
				response.end();
			})
		}
	})

server.listen(3000);