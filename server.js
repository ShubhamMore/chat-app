const app = require('./src/app');
const http = require('http');

const server = http.createServer(app);

const io = require('socket.io')(server);

io.on('connection', (socket, req) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('message', (msg) => {
    console.log('message: ' + msg);
    io.emit('resMsg', msg);
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Server is up on port ' + port);
});
