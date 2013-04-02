var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello world!');
}).listen(process.env.VMC_APP_PORT || 1337, null);
