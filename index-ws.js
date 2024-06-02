const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

server.on('request', app);
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

/** Begin websockets */
const WebSocketsServer = require('ws').Server;

const wss = new WebSocketsServer({ server: server });

wss.on('connection', (ws) => {
  const numClients = wss.clients.size;
  console.log('Client connected. Total clients: ', numClients);

  wss.broadcast(`${numClients} clients connected`);

  if (ws.readyState === ws.OPEN) {
    ws.send('Welcome to my server');
  }

  ws.on('close', () => {
    console.log('A client has disconnected. Total clients: ', wss.clients.size);
    wss.broadcast(`${wss.clients.size} clients connected`);
  });
});
  
wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(data);
    }
  });
};