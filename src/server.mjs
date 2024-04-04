// server.mjs
import { createServer } from 'node:http';

const PORT = 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

server.on("upgrade", (req, socket, head) => {
  socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
    'Upgrade: WebSocket\r\n' +
    'Connection: Upgrade\r\n' +
    '\r\n');
});


// starts a simple http server locally on port 3000
server.listen(PORT, '0.0.0.0', () => {
  console.log("Listening to port" + PORT);
});

// run with `node server.mjs`