const fs = require('fs')
const http = require('http')

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1)=>{
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2)=>{
//     console.log(data2)
//     fs.writeFile('./txt/dummyTxt.txt', `${data1}\n${data2}`, err =>{
//       console.log('hit')
//     })
//   })
// })


const server = http.createServer((req,res)=>{
  res.end(` <h1> hello from the server </h1>`)
})

server.listen(8080, ()=>{
  console.log('server is listening')
})




