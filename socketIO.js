var app = require('./app')
var http = require('http')
var server = http.createServer(app);
var socketIO = require('socket.io').listen(server);

module.exports = socketIO;