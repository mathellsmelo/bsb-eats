const express = require('express');
const path = require('path');
const cors = require('cors');
const socketio = require('socket.io');

const config = require('./config');

require('./database');

const app = express();
const server = require('http').createServer(app);
const io = socketio(server);
const routes = require('./routes');

/*app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'view', 'build', 'index.html'));
});*/

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(
    config.port, 
    console.log('Server has started on port %s', config.port)
);