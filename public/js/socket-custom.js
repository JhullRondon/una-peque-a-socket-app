const socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor');
});
// escuchar informacion
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});


//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jhull',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuesta de server: ', resp)
});
// escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
});