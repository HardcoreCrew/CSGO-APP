const expres = require('express');
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')

const app = expres();
app.use(cors())
const server = http.createServer(app, {
    cors
})
const io = socketio(server)

let onlinePlayers = []


io.on('connection', socket => {
    // io.to(socket.id).emit('my', onlinePlayers)
    console.log(`Połączenie: ${socket.id}`);
    
    socket.on('isOn', (data) =>{
        onlinePlayers.push({id: socket.id, userData: data})
        console.log(onlinePlayers);
        io.emit('onlinedata', onlinePlayers)
    })

    socket.on('isOff', (data) =>{
        console.log('UCIEKA: ' + socket.id);
        onlinePlayers = onlinePlayers.filter(x => x.id != socket.id)
        io.emit('onlinedata', onlinePlayers)
    })

    socket.on('message', (data) =>{
        socket.broadcast.emit('new_message', {...data, self: false})
        console.log(data);
    })

    socket.on('joinRoom', (data) =>{
        socket.broadcast.emit('new_message', {...data, self: false})
        console.log(data);
    })

    
})



server.listen(3137, ()=> console.log('Lecimy!'))