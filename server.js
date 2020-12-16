// import required essentials
const http = require('http');
const express = require('express');


// import `items` from `routes` folder 
const itemsRouter = require('./routes/items');

// create new 
const app = express();
app.use(express.json());

app.use('/items', itemsRouter);

// default URL to API
app.use('/', function(req, res) {
    res.send('node-ex-api works :-)');
});

const server = http.createServer(app);
const port = 5000;
server.listen(port);
console.debug('Server listening on port ' + port);
