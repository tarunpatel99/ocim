// console.log("Hello world!")
// type 'node server.js' for execution


const http = require('http')

const server = http.createServer((req, res) => {
    res.end('This is my first NodeJS program')
});

server.listen(process.nextTick.PORT || 3000);