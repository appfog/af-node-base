// JavaScript Document
//conectarse a mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
// END

var http = require('http');
var fs = require('fs');
var count = 0;
var server = http.createServer(function(req, res){
  fs.readFile('./index.php',function(error, data){
    res.writeHead(200, {'Content-Type':'text/html'});
		res.end(data,'utf-8');
	});

}).listen(process.env.VMC_APP_PORT || 2000, "http://appfog.com");
console.log("servidor funcionando....");

var io = require('socket.io').listen(server);
io.sockets.on('connection',function(socket){
	count++;
	console.log('user conectados'+ count );
	socket.emit('users',{number: count});
	socket.broadcast.emit('users',{number: count});
	socket.on('disconnect',function(){
		count--;
		console.log('usuario desconectado '+count);
		socket.broadcast.emit('users',{number: count});
	});
});
