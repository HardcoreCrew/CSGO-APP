const expres = require('express');
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')
const chatRoom = require('./utils/chatRoom')

const app = expres();
app.use(cors())
const server = http.createServer(app, {
    cors
})
const io = socketio(server)


io.on('connection', socket => {
    console.log(`new connect: ${socket.id}`);



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