// console.log("Hello world!")
// type 'node server.js' for execution


const http = require('http')
const app = require('./backend/app');
const debug = require('debug')('node-angular');

const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);