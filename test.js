//node js is built around modules 
const fs = require('fs')

// //readFileSync used to read file and takes in file location and character encoding 
// const readInput = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(readInput)

// //how to write a file
// const text = 'I learn js, node, mongo, and react'
// const writeText = fs.writeFileSync('./txt/randomTxt.txt', `${text}` )
// console.log(writeText)


//Non-blocking Asynchronous way 
fs.readFile('./txt/start.txt', 'utf-8', (err, data1)=>{
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2)=>{
    console.log(data2)
    fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3)=>{
      const newFile = `${data2} ${data3}`
    fs.writeFile(`./txt/newFile.txt`, newFile, (err, data4)=>{
      console.log('we made it')
    })
    })
  })
}) 

console.log('will read file')