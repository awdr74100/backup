const ws = new WebSocket('ws:localhost:3000');
const btn = document.querySelector('.btn');

ws.onopen = () => {
  console.log('Open connection');
};

ws.onclose = () => {
  console.log('Close connection');
};

ws.onmessage = (event) => {
  console.log(event);
};

btn.addEventListener('click', (e) => {
  e.preventDefault();

  ws.send('Ian');
});
