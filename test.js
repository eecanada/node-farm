const fs = require('fs')

fs.readFile('./txt/read-this.txt', 'utf-8', (err, data)=>{
  console.log(data)
})

console.log('hit')