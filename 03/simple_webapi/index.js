const http = require('http');
//create server
const server = http.createServer((req,res)=>{
    res.end('Hello from the Server');
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request');
});