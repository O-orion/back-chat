const express = require('express');
const http = require('http');
const cors = require('cors')
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app)
const io = socketIO(server, {cors: {origin: '*'}});



io.on('connection', (socket) => {
    console.log('Cliente connectado')

    socket.on('message', (message) => {
        console.log(message)
        io.emit('chatMessage', message)
    })

    socket.on('disconnect', () => {
        console.log('Usuário saiu')
    })

})

server.listen(8000, () => {
    console.log('Serve on! localhost:8000')
})

