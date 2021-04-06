const express = require('express');
const { Server } = require('socket.io');

const app = express();
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});

const io = new Server(server, { cors: { origin: true } });

io.on('connection', (socket) => {
  console.log('⚡ Socket.IO is listening for connections');
  console.log(`New User: ${socket.id}`);
  setInterval(() => {
    socket.emit('open_door', {
      type: 'door',
      message: 'open_door',
      timestamp: Date.now(),
    });
  }, 3000);

  socket.on('test', (data) => {
    socket.emit('callback', `Hello ${data}`);
    socket.emit('callback', 'Nice to meet you');
  });
});
