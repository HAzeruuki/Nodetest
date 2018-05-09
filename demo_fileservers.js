var http = require('http'); //lukee http ja html
var url = require('url'); //hakee tietoa urlista
var fs = require('fs'); //filesever

http.createServer(function (req, res) { //luo serverin
  var q = url.parse(req.url, true); //hakee urlin
  var filename = "." + q.pathname; //hakee tiedostonimen pathnamen kautta
  fs.readFile(filename, function(err, data) { //jos tulee error nii laittaa 404
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'}); //laittaa contentin sivulle html
    res.write(data); //kirjoittaa datan
    return res.end(); //lopettaa hommat
  });
}).listen(8080); //missä portissa tapahtuu