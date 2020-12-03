import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

// 監聽是否連接
socket.on('connect', () => {
  console.log('connected to the server');
});

// 監聽是否斷開連接
socket.on('disconnect', () => {
  console.log('disconnect to the server');
});

// 監聽自定義事件
socket.on('callYourId', (message) => {
  console.log(message);
});

socket.on('responseName', (message) => {
  console.log(message);
});

document.querySelector('#btn').addEventListener('click', function (e) {
  e.preventDefault();
  socket.emit('push_data', { message: `I'm ${socket.id}` });
});
