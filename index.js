//allows me to read files
const fs = require('fs')
//allows me to build server
const http = require('http')
const url = require('url')

//////////////////////////////////SERVER/////////////////////////////////// 

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const productData = JSON.parse(data)


//creating server -  passed call back function that is executed each time a new request hits the server, excuted each time there is a new request 
const server = http.createServer((req,res)=>{
  console.log(req.url)
  const pathName = req.url
  if(pathName === '/overview' || pathName === '/'){
    res.end('this is the overview') 
  } else if(pathName === '/product'){
    res.end('this is the product')
  } else if(pathName === '/api') {
    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data)=>{
      const productData = JSON.parse(data)
      res.writeHead(200, {'Content-type': 'application/json'})
      res.end(data)
    })
    
  } else {
    res.writeHead(404, { //piece of info of the response I am sending back
      'Content-type': 'text/html'
    })
    res.end('<h1> error page does not exist <h1>')
  }
  // res.end('hello from the server')
})

//listening to incoming request
server.listen(8000, '127.0.0.1', ()=>{
  console.log('listening to request on port 8000')
})

