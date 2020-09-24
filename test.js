const fs = require('fs')

fs.readFile('./txt/start.txt', 'utf-8', (err, data1)=>{
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2)=>{
    console.log(data2)
    fs.writeFile('./txt/dummyTxt.txt', `${data1}\n${data2}`, err =>{
      console.log('hit')
    })
  })
})

