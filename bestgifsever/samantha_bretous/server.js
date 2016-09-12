var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res){
  
  function readFile(filename){
    fs.readFile(filename, function(err, data){
      res.write(data);
      res.end();
    })
  }

  var url = req.url;

  if(url === '/') readFile('index.html');
  else if (url === '/random') readFile('random.html');
  else if (url === '/search') readFile('search.html');
  else if (url === '/scroll') readFile('scroll.html');
  else if (url === '/main.css') readFile('main.css');
  else if (url ==='/app.js') readFile('app.js');
  else {
    res.write('<h1>404</h1>')
    res.end();
  }
});

server.listen(3000, function (){
  console.log("Best Gif Ever Server is running on port 3000")
});