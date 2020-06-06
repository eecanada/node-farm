// fs is a node module
const fs = require('fs')
// http module used to build server
const http = require('http')

//////////////////////////////SERVER////////////////
const server = http.createServer((req, res)=>{
  //sending response to client 
  res.end('Hello from the server')
})
// a sub address on host, '127.0.0.1' === local host
server.listen(8000, '127.0.0.1', ()=>{
  console.log('listening to request on port 8000')
})





