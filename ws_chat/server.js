// const expres = require('express');
// const http = require('http')
// const socketio = require('socket.io')
// const cors = require('cors')

// const app = expres();
// app.use(cors())
// const server = http.createServer(app, {
//     cors
// })
// const io = socketio(server)

// let onlinePlayers = []


// io.on('connection', socket => {
//     // io.to(socket.id).emit('my', onlinePlayers)
//     console.log(`Połączenie: ${socket.id}`);

//     setInterval(() => {
//         io.emit('ping')        
//     }, 60000);
    
//     socket.on('isOn', (data) =>{
//         onlinePlayers.push({id: socket.id, userData: data})
//         console.log(onlinePlayers);
//         io.emit('onlinedata', onlinePlayers)
//     })

//     socket.on('isOff', (data) =>{
//         console.log('UCIEKA: ' + socket.id);
//         onlinePlayers = onlinePlayers.filter(x => x.id != socket.id)
//         io.emit('onlinedata', onlinePlayers)
//     })

//     socket.on('message', (data) =>{
//         socket.broadcast.emit('new_message', {...data, self: false})
//         console.log(data);
//     })

//     socket.on('joinRoom', (data) =>{
//         socket.broadcast.emit('new_message', {...data, self: false})
//         console.log(data);
//     })

//     socket.on('pong', (data) =>{
//         console.log(socket.id);
        
//     })

    
// })



// server.listen(3137, ()=> console.log('Lecimy!'))



const tmi = require('tmi.js');

const client = new tmi.Client({
	channels: [ 'spite' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
});