const app = require('express')();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: true,
  },
});

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send({ message: 'Hello World' });
});

/*
 1. io.emit = 向所有人
 2. socket.emit = 向自己
 3. socket.broadcast.emit = 向自己除外的所有人
*/

io.on('connection', async (socket) => {
  // console.log('client connected', Date.now());
  socket.emit('callYourId', `Client with id ${socket.id} was connected`);
  socket.on('push_data', async (data) => {
    // console.log(data);
    // socket.emit('responseName', data);
    socket.broadcast.emit('responseName', data);
  });
});

http.listen(port, () => console.log(`start localhost ${port}`));
