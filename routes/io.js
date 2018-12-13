const { io } = require('../server/server')


io.on('connection', (client) => {
    console.log('a user connected');

    client.on('disconnect', () => {
        console.log('Usuario desconectado ');
    })

    client.emit('enviarMensaje', {
        usuario: Math.floor(Math.random() * 1000),
        mensaje: 'Bien venido'
    })

    client.on('enviarMensaje', (mensaje, callback) => {



        client.broadcast.emit('enviarMensaje', mensaje);
        console.log(mensaje);


        if (mensaje.usuario) {
            //    callback({ user: 'server', mensaje: 'ok' })

        } else {
            //  callback({ user: 'server', mensaje: 'false' })
        }

    })


});