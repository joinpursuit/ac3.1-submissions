var http = require('http')
var fs = require('fs')
var server = http.createServer(function(request,response){
var url = request.url

	switch(url){
		
		case '/':
		fs.readFile('index.html',function(err,data){
			if(err) throw err
			response.write(data.toString())
			response.end()

			

		})
		break;




		case '/page2':
		fs.readFile('page2.html',function(err,data){
			if(err) throw err
			response.write(data.toString())
			response.end()
		})
			break;

		case '/main.css':
			fs.readFile('main.css',function(err,data){
			if(err) throw err
			response.write(data.toString())
			response.end()

		})
			break;

		
	
		
		case '/page3':
		fs.readFile('page3.html',function(err,data){
			if(err) throw err
			response.write(data.toString())
			response.end()

		})
		break;
		response.end()

	}

})
server.listen(3000)



