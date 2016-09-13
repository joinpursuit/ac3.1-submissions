var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	//get url
	var url = request.url;
	//create an if/else for different urls
	if(url ==='/'){
		fs.readFile('index.html',
			function(err,data){
				response.write(data.toString());
				response.end();
			})
	} else if (url === '/page-2') {
		fs.readFile('page-2.html',
			function(err,data){
				response.write(data.toString());
				response.end();
			})
	} else if (url === '/page-3') {
		fs.readFile('page-3.html',
			function(err,data){
				response.write(data.toString());
				response.end();
			})
	} else if (url === '/page-4') {
		fs.readFile('page-4.html',
			function(err,data){
				response.write(data.toString());
				response.end();
			})
	} else if (url === '/page-5') {
		fs.readFile('page-5.html',
			function(err,data){
				response.write(data.toString());
				response.end();
			})
	} else if (url === '/main.css') {
		fs.readFile('main.css',
			function(err,data){
				response.write(data.toString());
				response.end();
			})
	} else if(url === '/app.js'){
		fs.readFile('app.js',
			function(err,data){
				response.write(data.toString());
				response.end();
			})
	} else{
		response.write("<h1>404</h1>");
		response.end();
	}
		
});

server.listen(3000);