var socketIOHelper = require('../helpers/socketio');
var socketIO = socketIOHelper.get()
exports.receivers = () => {
    // socketIO = io;

    socketIO.on('connection', function(socket) {
        console.log('User connected...');
        var address = socket.handshake.address;
        console.log('New connection from ' + address.address + ':' + address.port);

        socket.on('chat message', function(msg) {
                console.log('msg = ' + msg);
                // setInterval(function(str1, str2) {

                //     socketIO.emit('chat message', msg);
                // }, 3000);

                socketIO.emit('chat message', msg);
            })
            // socketIO.emit('chat message', 'Now you ready to send msg');
        socket.on('disconnect', function() {
            console.log('user disconnected...');
        })
    });

}