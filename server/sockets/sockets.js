const {io} = require('../server');

io.on('connection', (client) => {
  console.log('usuario Conectado');

  //emitir mensaje
  client.emit('enviarMensaje', {
      usuario: 'admin',
      mensaje: 'bienvenido a esta aplicacion'
  });

  client.on('disconnect', () => {
      console.log('usuario desconectado');
  });

  //escuchar el cliente
  client.on('enviarMensaje', (data, callback) => {
    
    console.log(data);

    client.broadcast.emit('enviarMensaje', data);
    /*   if (data.usuario) {
          callback({
              resp: 'todo salio bien'
          })
      }else {
          callback({
              resp: 'todo salio mal'
          })
      } */


  });

});