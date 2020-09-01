//allows me to read files
const fs = require('fs')
//allows me to build server
const http = require('http')
const url = require('url')

//////////////////////////////////SERVER/////////////////////////////////// 

const replaceTemplate = (temp,product)=>{
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
  output = output.replace(/{%IMAGE%}/g, product.image)
  output = output.replace(/{%PRICE%}/g, product.price)
  output = output.replace(/{%FROM%}/g, product.from)
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients)
  output = output.replace(/{%QUANTITY%}/g, product.quantity)
  output = output.replace(/{%DESCRIPTION%}/g, product.description)
  output = output.replace(/{%ID%}/g, product.id)
  
  if(!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
}

//if missing, non-organic product will not show up
else {
    output = output.replace(/{%NOT_ORGANIC%}/g, '');
}
    return output
  
}

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


 


//creating server -  passed call back function that is executed each time a new request hits the server, excuted each time there is a new request 
const server = http.createServer((req,res)=>{
  console.log(req.url)

  //OVERVIEW PAGE
  const pathname = req.url
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);
 

  //PRODUCT PAGE 
  } else if(pathName === '/product'){
    res.end('this is the product')

  //API 
  } else if(pathName === '/api') {
      res.writeHead(200, {'Content-type': 'application/json'})
      res.end(data)


  //NOT FOUND   
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

