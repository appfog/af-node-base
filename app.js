var http=require('http'); 

var contador=0;

http.createServer(function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/html'}); 
	contador+=1;		
        console.log('cuenta: ' + contador + ': ' + req.url); 
    	res.end('<body><h1> ESTO ES UNA WEB EN HTML </h1><h2>y estoy haciendo el ejercicio 4 de node.js</h2> y has visitado esta pagina ' + contador + ' veces </body>');
		 
}).listen(8081, '127.0.0.1'); 

console.log('Servidor ejecutÃ¡ndose en http://127.0.0.1:8081/');
