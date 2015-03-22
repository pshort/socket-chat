var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

	socket.on('chat message', function(msg){
<<<<<<< HEAD
		console.log(' - ' + msg);
		io.emit('chat message', msg);
=======
		socket.emit('chat message', msg);
>>>>>>> 233a7b1a8632a0fa5877f8ce2d35c2f05b744a8c
	});

});

http.listen(3000, function() {
	console.log('listening on *:3000');
});
