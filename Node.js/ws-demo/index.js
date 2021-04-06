const express = require('express');
const WebSocket = require('ws');

const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
  console.log('⚡ WebSocket is listening for connections');
  console.log(`User: ${wss.clients.size}`);

  setInterval(() => {
    ws.send(
      JSON.stringify({
        type: 'door',
        message: 'open_door',
        timestamp: Date.now(),
      }),
    );
  }, 3000);

  ws.on('message', (data) => {
    /**
     * Basic
     */
    ws.send(`Hello ${data}`);
    ws.send(`Nice to meet you`);
    /**
     * A client WebSocket broadcasting to all connected WebSocket clients, including itself.
     */
    // wss.clients.forEach((client) => {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(data);
    //   }
    // });
    /**
     * A client WebSocket broadcasting to every other connected WebSocket clients, excluding itself.
     */
    // wss.clients.forEach((client) => {
    //   if (client !== ws && client.readyState === WebSocket.OPEN) {
    //     client.send(data);
    //   }
    // });
  });

  ws.on('close', () => {
    console.log('Disconnected!!');
  });
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ success: true });
});

app.post('/', (req, res) => {
  res.send({ success: true });
});
