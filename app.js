const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

//app.use('/Public', express.static('/Public'));
// GET /static/style.css etc.
app.use(express.static('assets'));
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/assets/index.html');
});

const server = http.createServer(app);
server.listen(80, () => console.log('Server Started - Listening 3000'));