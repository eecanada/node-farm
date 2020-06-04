// fs is a node module
const fs = require('fs')


////////BLOCKING//////
// takes two arguements, path to file I am reading and character encoding
// reading a file
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn)

const textOut = `This is what we know about the avocado ${textIn}. \nCreated on ${Date.now()}`
//writing and creating file, takes two arguements path of file and what I want to put inside it 
fs.writeFileSync('./txt/output.txt',textOut)
console.log('File has been written')

/////////NON-BLOCKING////////
// data can be named anything I want it, it is the file start.txt
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8',(err, data2)=>{
    fs.readFile('./txt/append.txt','utf-8', (err, data3)=>{
      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err =>{
        console.log('your file has been written')
      })
    })
  })
})