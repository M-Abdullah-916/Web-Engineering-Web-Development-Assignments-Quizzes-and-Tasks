var http = require ('http');
var string = 'hello world!'

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(string);
      res.write('   After Converting String Into Upper Case : ');
      res.write(string.toUpperCase());
      return res.end();
  }).listen(8080); 
