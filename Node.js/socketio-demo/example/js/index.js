const socket = io('http://localhost:4000');
const btn = document.querySelector('.btn');

socket.on('connect', () => {
  console.log('connected to the server');
});

socket.on('open_door', (data) => {
  console.log(data);
});

socket.on('callback', (data) => {
  console.log(data);
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  socket.emit('test', 'Ian');
});
