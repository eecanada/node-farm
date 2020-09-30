//allows me to read files
const fs = require('fs')
//allows me to build server
const http = require('http') 
const url = require('url')

const slugify = require('slugify')

const replaceTemplate = require('./modules/replaceTemplate')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//reading templates
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);


// read JSON data 
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// parse json string data to JS object
const dataObj = JSON.parse(data);
console.log(dataObj, 'hit')

const slugs = dataObj.map(el => slugify(el.productName, {lower:true}))
console.log(slugs)


 
/////////////////////////////////////////////////////SERVER//////////////////////////////////////////////////// 

//creating server -  passed call back function that is executed each time a new request hits the server, excuted each time there is a new request 
const server = http.createServer((req,res)=>{
  
  const {query, pathname} = url.parse(req.url, true)
  

  //OVERVIEW PAGE
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);
 
//PRODUCT PAGE  
} else if (pathname === '/product'){
  res.writeHead(200, {'Content-type':'text/html'})
  
  const product = dataObj[query.id] // this is targeting the whole array 0-4
  console.log(`${product}:hit`)
  const output = replaceTemplate(tempProduct, product)
  res.end(output)

}//API 
  else if(pathname === '/api') {
      res.writeHead(200, {'Content-type': 'application/json'})
      res.end(data)

//NOT FOUND   
  } else { 
    res.writeHead(404, { //piece of info of the response I am sending back
      'Content-type': 'text/html'
    })
    res.end('<h1> error page does not exist <h1>')
  } 
})

//listening to incoming request
server.listen(8000, '127.0.0.1', ()=>{
  console.log('listening to request on port 8000')
})

