import { createServer } from 'node:http';
import express from 'express';
import { Server } from 'socket.io';

const app = express();

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173' || production,
    },
});

const Room = 'group';

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('joinRoom', async (userName) => {
        console.log(`${userName} is joining the group.`);

        await socket.join(Room);

        // send to all the users online
        // io.to(Room).emit('roomNotice', userName);

        // broadcast
        socket.to(Room).emit('roomNotice', userName);
    });

    socket.on('chatMessage', (msg) => {
        socket.to(Room).emit('chatMessage', msg);
    });

    socket.on('typing', (userName) => {
        socket.to(Room).emit('typing', userName);
    });

    socket.on('stopTyping', (userName) => {
        socket.to(Room).emit('stopTyping', userName);
    });
});

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
