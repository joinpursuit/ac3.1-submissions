var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
	var url = req.url;
	if(url === "/") {
		fs.readFile("index.html", function (err, data) {
			if (err) throw err;
			res.write(data.toString());
			res.end();
		});
	}  else if(url === "/page-2") {
		fs.readFile("page-2.html", function (err, data) {
			if (err) throw err;
			res.write(data.toString());
			res.end();
		});
	}  else if(url === "/page-3") {
		fs.readFile("page-3.html", function (err, data) {
			if (err) throw err;
			res.write(data.toString());
			res.end();
		});
	} else if (url === '/random') {
		fs.readFile('random.html', function (err, data) {
			if (err) throw err;
			res.write(data).toString();
			res.end();
	 	});
	} else if (url === '/trending') {
		fs.readFile('trending.html', function (err, data) {
			if (err) throw err;
			res.write(data).toString();
			res.end();
	 	});
	} else if (url === '/main.css') {
		fs.readFile('main.css', function (err, data) {
			if (err) throw err;
			res.write(data);
			res.end();
		});
	} else if (url === '/app.js') {
		fs.readFile('app.js', function (err, data) {
			if (err) throw err;
			res.write(data);
			res.end();
	 	});
	} else {
		res.write("<h1>404</h1>");
		res.write("<p>Page Not Found</p>");
		res.end();
	}
});

server.listen(5000)