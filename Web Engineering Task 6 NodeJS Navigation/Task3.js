var http = require ('http');
var fs = require ('fs');

fs.appendFile('mytext.txt', 'Hi, I am newly text added, happy to be in notepad file.', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 


http.createServer(function (req, res) {
    fs.readFile('mytext.txt', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080); 
