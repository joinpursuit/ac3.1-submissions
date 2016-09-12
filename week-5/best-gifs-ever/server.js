var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	if(request.url === "/"){
		request.url = "/index.html";
	}
	fs.readFile('.'+request.url, function(err, data){
		if (err){
			response.write("<h1>404<h1>");
			response.end();
		}else{
			response.write(data.toString());
			response.end();	
		};	
	})
});	
server.listen(3000);