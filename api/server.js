const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

server.use('*', (req, res) => {
    res.send(`<h1>Hello world!</h1>`)
})

server.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack })
})

server.get('/api/users', (req, res) => {
    res.json({ message: 'api working' });
})

module.exports = server;