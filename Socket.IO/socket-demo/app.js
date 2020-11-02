const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

io.on('connection', (socket) => {
  console.log('Hello World');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  });
});

const port = process.env.PORT || 3000;
http.listen(port, () => console.log(`開啟 PORT 為 ${port} 的本地伺服器`));
