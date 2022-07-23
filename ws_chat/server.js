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


io.on('connection', socket => {
    console.log(`new connect: ${socket.id}`);

    socket.on('ping', (data) =>{
        socket.emit('pong')
        console.log('PING');
    })

    socket.on('message', (data) =>{
        socket.emit('new_message', data)
    })
})



server.listen(3137, ()=> console.log('Lecimy!'))