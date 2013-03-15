var diegoio=require("socket.io").listen(6969);
diegoio.sockets.on("connection",arranque);

 function arranque(usuario){
   usuario.on("nuevoNombre",emitir);
 }

 function emitir(data){
 	diegoio.sockets.emit("nombreDesdeServidor",data+"*");
 }
