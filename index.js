// // fs is a node module, for reading and writing data
// const fs = require('fs')
// // http module used to build server
// const http = require('http')
// const url = require('url')


// //////////////////////////////SERVER////////////////
// const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8')
// const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
// const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')
// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
//   //JSON.parse takes json code(string) and turns it into JS object
// const dataObject = JSON.parse(data)
//   // console.log(productData)
//   // res.writeHead(200 , {
//   //   //when I send json it needs to have this header
//   //   'Content-type':'application/json'
//   // })
//   // res.end(data)

// const server = http.createServer((req, res)=>{
//   //sending response to client everytime a new request hits the server
//   console.log(req.url, 'hit') // -> /
//   const pathName = req.url

//   // Overview page
//   if(pathName === '/' || pathName === '/overview'){
//     res.writeHead(200, { 'Content-type': 'text/html'})
//     data
//     res.end(tempOverview)
//   }

//   // Product page
//   else if(pathName === '/product'){
//     res.end('This is the PRODUCT')


//   // API
//   } else if (pathName === '/api'){
//     res.writeHead(200, {
//       'Content-type':'application/json'
//     })
//     res.end(data)


//   // Not Found  
//   } else {
//     // header always needs to be set before the response  
//     res.writeHead(404, {
//       // http header is info of response I am sending back
//       'Content-type':'text/html' 
//     })
//     res.end('<h1>Page not found</h1>')
//   }
// })
// // a sub address on host, '127.0.0.1' === local host, listening to income request on port 8000, the request is url localhost:8000
// server.listen(8000, '127.0.0.1', ()=>{
//   console.log('listening to request on port 8000')
// })


const fs = require('fs')
//allows me to build server
const http = require('http')

//////////////////////////////////SERVER/////////////////////////////////// 

//creating server
http.createServer((req,res)=>{
  res.end('hello from the server')
})


