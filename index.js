// fs is a node module
const fs = require('fs')
// http module used to build server
const http = require('http')
const url = require('url')


//////////////////////////////SERVER////////////////
const server = http.createServer((req, res)=>{
  //sending response to client everytime a new request hits the server
  console.log(req.url, 'hit') // /
  const pathName = req.url
  if(pathName === '/' || pathName === '/overview'){
    res.end('This is the OVERVIEW')
  }
  else if(pathName === '/product'){
    res.end('This is the PRODUCT')
  }
})
// a sub address on host, '127.0.0.1' === local host, listening to income request on port 8000, the request is url localhost:8000
server.listen(8000, '127.0.0.1', ()=>{
  console.log('listening to request on port 8000')
})





